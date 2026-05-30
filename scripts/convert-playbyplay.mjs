import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";

const INPUT_ARG = process.argv[2];
const OUTPUT_ARG = process.argv[3];

if (!INPUT_ARG) {
  console.error(
    "Usage: node scripts/convert-playbyplay.mjs <inputRawFile> [outputCsvFile]",
  );
  process.exit(1);
}

const inputPath = path.resolve(process.cwd(), INPUT_ARG);
const outputPath = OUTPUT_ARG
  ? path.resolve(process.cwd(), OUTPUT_ARG)
  : path.join(
      path.dirname(inputPath),
      `${path.basename(inputPath, path.extname(inputPath))}.compiled.csv`,
    );

const header = [
  "time",
  "quarter",
  "team",
  "player",
  "play",
  "distance",
  "result",
  "assist",
  "points",
  "rebounds",
  "assists",
  "steals",
  "blocks",
  "turnovers",
  "fouls",
];

const spursTokens = new Set([
  "Wembanyama",
  "Harper",
  "Castle",
  "Vassell",
  "Champagnie",
  "Johnson",
  "Bryant",
  "Barnes",
  "Kornet",
]);

const thunderTokens = new Set([
  "Gilgeous-Alexander",
  "Jalen",
  "Jal.",
  "Holmgren",
  "Dort",
  "Hartenstein",
  "Caruso",
  "McCain",
  "Jaylin",
  "Jay.",
  "Wallace",
  "Mitchell",
  "Wiggins",
  "Joe",
]);

const isTime = (line) => /^\d{1,2}:\d{2}$/.test(line);
const isScore = (line) => /^\d+\s*-\s*\d+$/.test(line);
const isIgnorable = (line) =>
  line.length === 0 ||
  line === "undefined Headshot" ||
  line === "Logo" ||
  /^time,quarter,team,player,play,/.test(line) ||
  /^"\d{1,2}:\d{2}",\d+,/.test(line);

const toCsvField = (value) => {
  const text = String(value ?? "");
  if (text.includes(",") || text.includes('"') || text.includes("\n")) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
};

const extractDistance = (playText) => {
  const match = playText.match(/\b(\d+)'/);
  return match ? match[1] : "NA";
};

const extractAssistName = (playText) => {
  const match = playText.match(/\(([^()]+?)\s+\d+\s+AST\)/i);
  return match ? match[1].trim() : "NA";
};

const stripDistancePrefix = (text) => text.replace(/^\d+'\s+/, "").trim();

const inferPlayer = (playText) => {
  if (playText.startsWith("Jump Ball ")) {
    const jumpBallMatch = playText.match(/^Jump Ball\s+([^\s]+)/);
    return jumpBallMatch ? jumpBallMatch[1] : "Unknown";
  }

  if (playText.startsWith("SUB:")) {
    const subMatch = playText.match(/^SUB:\s+([^\s]+)/);
    return subMatch ? subMatch[1] : "Unknown";
  }

  const cleaned = playText.replace(/^MISS\s+/, "").replace(/^Spurs\s+/, "");
  const playerMatch = cleaned.match(/^([^\s]+)/);
  return playerMatch ? playerMatch[1] : "Unknown";
};

const inferTeam = (playText, player) => {
  if (/^THUNDER\b/.test(playText)) return "THUNDER";
  if (/^SPURS\b/i.test(playText) || /^Spurs\b/.test(playText)) return "SPURS";

  if (spursTokens.has(player)) return "SPURS";
  if (thunderTokens.has(player)) return "THUNDER";

  return "UNKNOWN";
};

const inferResultLabel = (playText) => {
  if (playText.startsWith("MISS ")) {
    const cleaned = playText.replace(/^MISS\s+[^\s]+\s*/, "").trim();
    return stripDistancePrefix(cleaned);
  }

  if (/\bREBOUND\b/i.test(playText)) return "REBOUND";
  if (/\bSTEAL\b/i.test(playText)) return "STEAL";
  if (/\bBLOCK\b/i.test(playText)) return "BLOCK";
  if (/\bTurnover\b/i.test(playText)) return "TURNOVER";
  if (/\bFOUL\b/i.test(playText)) return "FOUL";
  if (/\bTimeout\b/i.test(playText)) return "TIMEOUT";
  if (/^SUB:/.test(playText)) return "SUB";

  const madeMatch = playText.match(/^[^\s]+\s+(.+?)\s+\(\d+\s+PTS\)/);
  if (madeMatch) return stripDistancePrefix(madeMatch[1].trim());

  return playText;
};

const inferPoints = (playText) => {
  if (playText.startsWith("MISS ")) return 0;
  if (!/\(\d+\s+PTS\)/.test(playText)) return 0;
  if (/\bFree Throw\b/.test(playText)) return 1;
  if (/\b3PT\b/.test(playText)) return 3;
  return 2;
};

const makeRow = ({ time, quarter, playText }) => {
  const player = inferPlayer(playText);
  const team = inferTeam(playText, player);
  const assistName = extractAssistName(playText);
  const assistsFlag = assistName === "NA" ? 0 : 1;

  const row = {
    time,
    quarter,
    team,
    player,
    play: playText,
    distance: extractDistance(playText),
    result: inferResultLabel(playText),
    assist: assistName,
    points: inferPoints(playText),
    rebounds: /\bREBOUND\b/i.test(playText) ? 1 : 0,
    assists: assistsFlag,
    steals: /\bSTEAL\b/i.test(playText) ? 1 : 0,
    blocks: /\bBLOCK\b/i.test(playText) ? 1 : 0,
    turnovers: /\bTurnover\b/i.test(playText) ? 1 : 0,
    fouls: /\bFOUL\b/i.test(playText) ? 1 : 0,
  };

  return header.map((column) => toCsvField(row[column])).join(",");
};

const convert = async () => {
  const input = fs.createReadStream(inputPath, { encoding: "utf8" });
  const output = fs.createWriteStream(outputPath, { encoding: "utf8" });
  const rl = readline.createInterface({ input, crlfDelay: Infinity });

  let quarter = 1;
  let pendingTime = null;
  let pendingPlay = null;
  let rowCount = 0;

  output.write(`${header.join(",")}\n`);

  for await (const rawLine of rl) {
    const line = rawLine.trim();

    if (isIgnorable(line)) continue;

    const quarterStartMatch = line.match(/^Q(\d+)\s+start$/i);
    if (quarterStartMatch) {
      quarter = Number(quarterStartMatch[1]);
      pendingTime = null;
      pendingPlay = null;
      continue;
    }

    const otStartMatch = line.match(/^OT(\d+)\s+start$/i);
    if (otStartMatch) {
      quarter = 4 + Number(otStartMatch[1]);
      pendingTime = null;
      pendingPlay = null;
      continue;
    }

    if (/^(Q\d+|OT\d+)\s+end$/i.test(line)) {
      pendingTime = null;
      pendingPlay = null;
      continue;
    }

    if (isScore(line)) continue;

    if (isTime(line)) {
      // Backward compatibility: if a play was read before its timestamp, flush it.
      if (pendingPlay && !pendingTime) {
        output.write(
          makeRow({ time: line, quarter, playText: pendingPlay }) + "\n",
        );
        rowCount += 1;
        pendingPlay = null;
      } else {
        // Preferred format: timestamp appears before the play block.
        pendingTime = line;
      }
      continue;
    }

    if (pendingTime) {
      output.write(
        makeRow({ time: pendingTime, quarter, playText: line }) + "\n",
      );
      rowCount += 1;
      pendingTime = null;
      pendingPlay = null;
      continue;
    }

    pendingPlay = line;
  }

  output.end();

  await new Promise((resolve, reject) => {
    output.on("finish", resolve);
    output.on("error", reject);
  });

  console.log(`Converted ${rowCount} rows -> ${outputPath}`);
};

convert().catch((error) => {
  console.error(error);
  process.exit(1);
});
