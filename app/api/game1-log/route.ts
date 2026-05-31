import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type PlayEntry = {
  time: string;
  quarter: string;
  team: "OKC" | "SAS";
  player: string;
  play: string;
  result: "made" | "miss" | "other";
  assist: string;
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fouls: number;
};

const parseCsvLine = (line: string): string[] => {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      const next = line[i + 1];
      if (inQuotes && next === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current);
  return values;
};

const toDisplayPlayer = (player: string) => {
  if (!player) return "Unknown";
  if (player === "THUNDER") return "Team Thunder";
  if (player === "SPURS") return "Team Spurs";
  return player;
};

const isShotPlay = (play: string) =>
  /\b(shot|jumper|jump shot|layup|dunk|hook|free throw)\b/i.test(play);

const toShotResult = (play: string): "made" | "miss" | "other" => {
  if (!isShotPlay(play)) return "other";
  if (/^MISS\b/.test(play)) return "miss";
  return "made";
};

const toQuarterLabel = (quarterValue: string) => {
  const quarterNum = Number.parseInt(quarterValue, 10);
  if (!Number.isFinite(quarterNum)) return quarterValue;
  if (quarterNum <= 4) return `Q${quarterNum}`;
  return `OT${quarterNum - 4}`;
};

export async function GET() {
  const csvPath = path.join(process.cwd(), "app", "info", "game1.compiled.csv");
  const csvText = await fs.readFile(csvPath, "utf8");

  const lines = csvText.split(/\r?\n/).filter((line) => line.trim().length > 0);
  const dataLines = lines.slice(1);

  const plays: PlayEntry[] = [];

  for (const line of dataLines) {
    const row = parseCsvLine(line);
    if (row.length < 15) continue;

    const time = row[0];
    const quarterNum = row[1];
    const teamRaw = row[2];
    const playerRaw = row[3];
    const play = row[4];
    const assistRaw = row[7];

    const team =
      teamRaw === "THUNDER" ? "OKC" : teamRaw === "SPURS" ? "SAS" : null;
    if (!team) continue;

    plays.push({
      time,
      quarter: toQuarterLabel(quarterNum),
      team,
      player: toDisplayPlayer(playerRaw),
      play,
      result: toShotResult(play),
      assist: assistRaw,
      points: Number.parseInt(row[8], 10) || 0,
      rebounds: Number.parseInt(row[9], 10) || 0,
      assists: Number.parseInt(row[10], 10) || 0,
      steals: Number.parseInt(row[11], 10) || 0,
      blocks: Number.parseInt(row[12], 10) || 0,
      turnovers: Number.parseInt(row[13], 10) || 0,
      fouls: Number.parseInt(row[14], 10) || 0,
    });
  }

  return NextResponse.json(plays);
}
