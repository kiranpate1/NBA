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

const stripNameSuffix = (name) =>
  name
    .replace(/\b(?:Jr\.?|Sr\.?|I{2,4})$/i, "")
    .replace(/[.,;:()]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const canonicalName = (name) => stripNameSuffix(name).toLowerCase();

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

const extractSubNames = (playText) => {
  const match = playText.match(/^SUB:\s+(.+?)\s+FOR\s+(.+?)(?:\s*\(|$)/i);
  if (!match) return { incoming: "NA", outgoing: "NA" };
  return {
    incoming: match[1].trim(),
    outgoing: match[2].trim(),
  };
};

const extractJumpBallTipTo = (playText) => {
  const match = playText.match(/Tip to\s+(.+)$/i);
  return match ? match[1].trim() : "NA";
};

const stripDistancePrefix = (text) => text.replace(/^\d+'\s+/, "").trim();

const inferPlayer = (playText) => {
  if (playText.startsWith("Jump Ball ")) {
    const jumpBallMatch = playText.match(/^Jump Ball\s+(.+?)\s+vs\./i);
    if (jumpBallMatch) return stripNameSuffix(jumpBallMatch[1]);

    const jumpBallShortMatch = playText.match(/^Jump Ball\s+([^\s]+)/);
    return jumpBallShortMatch
      ? stripNameSuffix(jumpBallShortMatch[1])
      : "Unknown";
  }

  if (playText.startsWith("SUB:")) {
    const subMatch = playText.match(/^SUB:\s+(.+?)\s+FOR\s+/i);
    if (subMatch) return stripNameSuffix(subMatch[1]);

    const subShortMatch = playText.match(/^SUB:\s+([^\s]+(?:\s+[^\s]+)?)/);
    return subShortMatch ? stripNameSuffix(subShortMatch[1]) : "Unknown";
  }

  const cleaned = playText.replace(/^MISS\s+/, "").replace(/^Spurs\s+/, "");

  const initialsMatch = cleaned.match(
    /^([A-Z]\.\s+[A-Za-z'\-]+(?:\s+[A-Za-z'\-]+)?)/,
  );
  if (initialsMatch) return stripNameSuffix(initialsMatch[1]);

  const fullNameMatch = cleaned.match(
    /^([A-Z][A-Za-z'\-]+(?:\s+[A-Z][A-Za-z'\-]+)+)/,
  );
  if (fullNameMatch) return stripNameSuffix(fullNameMatch[1]);

  const singleMatch = cleaned.match(/^([^\s]+)/);
  return singleMatch ? stripNameSuffix(singleMatch[1]) : "Unknown";
};

const inferDirectTeam = (playText) => {
  if (/^THUNDER\b/.test(playText)) return "THUNDER";
  if (/^SPURS\b/i.test(playText) || /^Spurs\b/.test(playText)) return "SPURS";
  return null;
};

const inferTeamFromKnownNames = (playText, playerTeamMap) => {
  const normalizedText = canonicalName(playText);
  for (const [knownName, team] of playerTeamMap.entries()) {
    if (knownName && normalizedText.includes(knownName)) {
      return team;
    }
  }

  return null;
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

const makeRow = ({
  time,
  quarter,
  playText,
  playerTeamMap,
  lastResolvedTeam,
}) => {
  const player = inferPlayer(playText);
  const assistName = extractAssistName(playText);
  const { incoming: subIncomingName, outgoing: subOutgoingName } =
    extractSubNames(playText);
  const jumpBallTipTo = extractJumpBallTipTo(playText);

  const row = {
    time,
    quarter,
    team: "UNKNOWN",
    player,
    play: playText,
    distance: extractDistance(playText),
    result: inferResultLabel(playText),
    assist: assistName,
    points: inferPoints(playText),
    rebounds: /\bREBOUND\b/i.test(playText) ? 1 : 0,
    assists: assistName === "NA" ? 0 : 1,
    steals: /\bSTEAL\b/i.test(playText) ? 1 : 0,
    blocks: /\bBLOCK\b/i.test(playText) ? 1 : 0,
    turnovers: /\bTurnover\b/i.test(playText) ? 1 : 0,
    fouls: /\bFOUL\b/i.test(playText) ? 1 : 0,
  };

  const lookupKnownTeam = (name) => {
    if (!name || name === "NA") return null;
    return playerTeamMap.get(canonicalName(name)) ?? null;
  };

  let team = inferDirectTeam(playText);

  if (!team && spursTokens.has(player)) team = "SPURS";
  if (!team && thunderTokens.has(player)) team = "THUNDER";
  if (!team) team = lookupKnownTeam(player);

  if (!team) team = lookupKnownTeam(assistName);
  if (!team) team = lookupKnownTeam(subIncomingName);
  if (!team) team = lookupKnownTeam(subOutgoingName);
  if (!team) team = lookupKnownTeam(jumpBallTipTo);
  if (!team) team = inferTeamFromKnownNames(playText, playerTeamMap);

  if (!team && /Instant Replay/i.test(playText)) {
    team = lastResolvedTeam;
  }

  if (!team && /^Double Technical/i.test(playText)) {
    team = inferTeamFromKnownNames(playText, playerTeamMap) ?? lastResolvedTeam;
  }

  row.team = team ?? "UNKNOWN";

  const register = (name) => {
    if (!name || name === "NA" || row.team === "UNKNOWN") return;
    playerTeamMap.set(canonicalName(name), row.team);
  };

  register(player);
  register(assistName);
  register(subIncomingName);
  register(subOutgoingName);
  register(jumpBallTipTo);

  return {
    csvLine: header.map((column) => toCsvField(row[column])).join(","),
    team: row.team,
  };
};

const convert = async () => {
  const input = fs.createReadStream(inputPath, { encoding: "utf8" });
  const output = fs.createWriteStream(outputPath, { encoding: "utf8" });
  const rl = readline.createInterface({ input, crlfDelay: Infinity });

  let quarter = 1;
  let pendingTime = null;
  let pendingPlay = null;
  let rowCount = 0;
  let lastResolvedTeam = null;
  const playerTeamMap = new Map();

  for (const token of spursTokens) {
    playerTeamMap.set(canonicalName(token), "SPURS");
  }
  for (const token of thunderTokens) {
    playerTeamMap.set(canonicalName(token), "THUNDER");
  }

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
      if (pendingPlay && !pendingTime) {
        const { csvLine, team } = makeRow({
          time: line,
          quarter,
          playText: pendingPlay,
          playerTeamMap,
          lastResolvedTeam,
        });
        output.write(`${csvLine}\n`);
        rowCount += 1;
        if (team !== "UNKNOWN") lastResolvedTeam = team;
        pendingPlay = null;
      } else {
        pendingTime = line;
      }
      continue;
    }

    if (pendingTime) {
      const { csvLine, team } = makeRow({
        time: pendingTime,
        quarter,
        playText: line,
        playerTeamMap,
        lastResolvedTeam,
      });
      output.write(`${csvLine}\n`);
      rowCount += 1;
      if (team !== "UNKNOWN") lastResolvedTeam = team;
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
