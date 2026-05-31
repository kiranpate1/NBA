"use client";

import React, { useEffect, useRef, useState } from "react";
import Court from "./components/Court";
import GameGrid from "./components/GameGrid";
import GameCard from "./components/GameCard";
import Game1_SAS from "./graphics/game1/Game1_SAS";
import Game1_OKC from "./graphics/game1/Game1_OKC";
import { games } from "./info/games";
import { spursPlayers, thunderPlayers } from "./info/players";
import Game1Spread from "./graphics/game1/Game1Spread";

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

type PlayerStats = {
  pts: number;
  fgMade: number;
  fgAtt: number;
  reb: number;
  ast: number;
  threePtMade: number;
  threePtAtt: number;
  stl: number;
  blk: number;
};

type TeamStats = Record<string, PlayerStats>;
type TeamScore = { OKC: number; SAS: number };

const makeEmptyPlayerStats = (): PlayerStats => ({
  pts: 0,
  fgMade: 0,
  fgAtt: 0,
  reb: 0,
  ast: 0,
  threePtMade: 0,
  threePtAtt: 0,
  stl: 0,
  blk: 0,
});

const makeEmptyTeamStats = (players: Array<{ name: string }>): TeamStats =>
  Object.fromEntries(
    players.map((player) => [player.name, makeEmptyPlayerStats()]),
  );

const makeNameLookup = (
  players: Array<{ name: string }>,
  aliases: Record<string, string> = {},
) => {
  const lookup = new Map<string, string>();

  for (const player of players) {
    const fullName = player.name;
    lookup.set(fullName.toLowerCase(), fullName);

    const parts = fullName.split(" ");
    const lastName = parts[parts.length - 1];
    lookup.set(lastName.toLowerCase(), fullName);
  }

  for (const [token, fullName] of Object.entries(aliases)) {
    lookup.set(token.toLowerCase(), fullName);
  }

  return lookup;
};

const thunderNameLookup = makeNameLookup(thunderPlayers, {
  jalen: "Jalen Williams",
  "jal.": "Jalen Williams",
  jaylin: "Jaylin Williams",
  "jay.": "Jaylin Williams",
});
const spursNameLookup = makeNameLookup(spursPlayers);

const resolveRosterName = (team: "OKC" | "SAS", rawName: string) => {
  const token = rawName.trim().toLowerCase();
  if (!token || token === "na" || token === "unknown") return null;
  if (token === "team thunder" || token === "team spurs") return null;

  const lookup = team === "OKC" ? thunderNameLookup : spursNameLookup;
  return lookup.get(token) ?? null;
};

const isFreeThrowPlay = (play: string) => /\bfree\s*throw\b/i.test(play);
const isThreePointPlay = (play: string) => /\b3pt\b/i.test(play);
const isFieldGoalAttempt = (entry: PlayEntry) =>
  (entry.result === "made" || entry.result === "miss") &&
  !isFreeThrowPlay(entry.play);

const getAbsoluteSeconds = (quarter: string, time: string): number => {
  const [minStr, secStr] = time.split(":");
  const remaining = parseInt(minStr) * 60 + parseInt(secStr);
  const isOT = quarter.startsWith("OT");
  const periodDuration = isOT ? 5 * 60 : 12 * 60;
  const elapsed = periodDuration - remaining;

  let offset = 0;
  if (quarter === "Q1") offset = 0;
  else if (quarter === "Q2") offset = 12 * 60;
  else if (quarter === "Q3") offset = 24 * 60;
  else if (quarter === "Q4") offset = 36 * 60;
  else if (isOT) {
    const otNum = parseInt(quarter.slice(2));
    offset = 48 * 60 + (otNum - 1) * 5 * 60;
  }

  return offset + elapsed;
};

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

type QuarterInfo = {
  quarter: string;
  remainingInQuarter: number;
};

const getQuarterAndTime = (
  absoluteSeconds: number,
  numOTs: number,
): QuarterInfo => {
  const Q_DURATION = 12 * 60;
  const OT_DURATION = 5 * 60;

  if (absoluteSeconds < Q_DURATION) {
    return {
      quarter: "Q1",
      remainingInQuarter: Q_DURATION - absoluteSeconds,
    };
  } else if (absoluteSeconds < Q_DURATION * 2) {
    return {
      quarter: "Q2",
      remainingInQuarter: Q_DURATION * 2 - absoluteSeconds,
    };
  } else if (absoluteSeconds < Q_DURATION * 3) {
    return {
      quarter: "Q3",
      remainingInQuarter: Q_DURATION * 3 - absoluteSeconds,
    };
  } else if (absoluteSeconds < Q_DURATION * 4) {
    return {
      quarter: "Q4",
      remainingInQuarter: Q_DURATION * 4 - absoluteSeconds,
    };
  } else {
    const elapsedAfterQ4 = absoluteSeconds - Q_DURATION * 4;
    const otNumber = Math.floor(elapsedAfterQ4 / OT_DURATION) + 1;
    const otStartSeconds = Q_DURATION * 4 + (otNumber - 1) * OT_DURATION;
    return {
      quarter: `OT${otNumber}`,
      remainingInQuarter: OT_DURATION - (absoluteSeconds - otStartSeconds),
    };
  }
};

export default function Home() {
  const courtHeight = 160;
  const gameScroll = 400; // in vh, regulation 48 minutes
  const otTest = 2; // in number of OTs, for testing purposes (5 minutes each)
  const topLipHeight = 80;
  const playBoundaryRef = useRef<HTMLDivElement | null>(null);
  const OKCPlayRef = useRef<HTMLDivElement | null>(null);
  const SASPlayRef = useRef<HTMLDivElement | null>(null);
  const Game1ScrollRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const courtHeightDynamicRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const footerMetricsRef = useRef({ top: 0, bottom: 0 });
  const gameClockRef = useRef<HTMLHeadingElement | null>(null);
  const quarterRef = useRef<HTMLElement | null>(null);
  const sasCourtRef = useRef<HTMLDivElement | null>(null);
  const okcCourtRef = useRef<HTMLDivElement | null>(null);
  const [plays, setPlays] = useState<PlayEntry[]>([]);
  const [boxStats, setBoxStats] = useState(() => ({
    OKC: makeEmptyTeamStats(thunderPlayers),
    SAS: makeEmptyTeamStats(spursPlayers),
  }));
  const [teamScore, setTeamScore] = useState<TeamScore>({ OKC: 0, SAS: 0 });
  const [gameSeconds, setGameSeconds] = useState((48 + otTest * 5) * 60);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadPlays = async () => {
      const response = await fetch("/api/game1-log", { cache: "no-store" });
      if (!response.ok) return;

      const data = (await response.json()) as PlayEntry[];
      if (isMounted) {
        const maxSec = data.reduce(
          (max, entry) =>
            Math.max(max, getAbsoluteSeconds(entry.quarter, entry.time)),
          0,
        );
        setPlays(data);
        if (maxSec > 0) setGameSeconds(maxSec);
      }
    };

    void loadPlays();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const scrollEl = Game1ScrollRef.current;
    const okcEl = OKCPlayRef.current;
    const sasEl = SASPlayRef.current;

    const boundaryEl = playBoundaryRef.current;

    if (!scrollEl || !okcEl || !sasEl || !boundaryEl) return;

    const totalSeconds = gameSeconds;
    let lastRenderedSecond = -1;
    let lastZone: "above" | "active" | "below" | null = null;

    const computeSnapshot = (currentSeconds: number) => {
      const next = {
        OKC: makeEmptyTeamStats(thunderPlayers),
        SAS: makeEmptyTeamStats(spursPlayers),
      };
      const score: TeamScore = { OKC: 0, SAS: 0 };

      for (const entry of plays) {
        const entrySeconds = getAbsoluteSeconds(entry.quarter, entry.time);
        if (entrySeconds > currentSeconds) break;

        score[entry.team] += entry.points;

        const teamStats = next[entry.team];
        const scorerName = resolveRosterName(entry.team, entry.player);

        if (scorerName && teamStats[scorerName]) {
          const scorerLine = teamStats[scorerName];
          scorerLine.pts += entry.points;
          scorerLine.reb += entry.rebounds;
          scorerLine.stl += entry.steals;
          scorerLine.blk += entry.blocks;

          if (isFieldGoalAttempt(entry)) {
            scorerLine.fgAtt += 1;
            if (entry.result === "made") scorerLine.fgMade += 1;

            if (isThreePointPlay(entry.play)) {
              scorerLine.threePtAtt += 1;
              if (entry.result === "made") scorerLine.threePtMade += 1;
            }
          }
        }

        const assistName = resolveRosterName(entry.team, entry.assist);
        if (assistName && teamStats[assistName]) {
          teamStats[assistName].ast += entry.assists;
        }
      }

      return { boxStats: next, score };
    };

    const renderAtSecond = (currentSeconds: number) => {
      const snapshot = computeSnapshot(currentSeconds);
      setBoxStats(snapshot.boxStats);
      setTeamScore(snapshot.score);

      const { quarter, remainingInQuarter } = getQuarterAndTime(
        currentSeconds,
        otTest,
      );
      if (gameClockRef.current) {
        gameClockRef.current.textContent = formatTime(remainingInQuarter);
      }
      if (quarterRef.current) {
        quarterRef.current.textContent = quarter;
      }

      let okcPlay: PlayEntry | null = null;
      let sasPlay: PlayEntry | null = null;

      for (const entry of plays) {
        const entrySeconds = getAbsoluteSeconds(entry.quarter, entry.time);
        if (entrySeconds > currentSeconds) break;
        if (entry.team === "OKC") okcPlay = entry;
        else if (entry.team === "SAS") sasPlay = entry;
      }

      const okcResult = okcPlay
        ? isFreeThrowPlay(okcPlay.play)
          ? ""
          : okcPlay.result === "made"
            ? "<b style='color: var(--make)'>✓</b>"
            : okcPlay.result === "miss"
              ? "<b style='color: var(--miss)'>✗</b>"
              : ""
        : "";
      const sasResult = sasPlay
        ? isFreeThrowPlay(sasPlay.play)
          ? ""
          : sasPlay.result === "made"
            ? "<b style='color: var(--make)'>✓</b>"
            : sasPlay.result === "miss"
              ? "<b style='color: var(--miss)'>✗</b>"
              : ""
        : "";

      okcEl.innerHTML = okcPlay
        ? `${okcPlay.player[0]}. ${okcPlay.player.split(" ")[1] ?? ""} – ${okcPlay.play} ${okcResult}`
        : "&ensp;";
      sasEl.innerHTML = sasPlay
        ? `${sasResult} ${sasPlay.player[0]}. ${sasPlay.player.split(" ")[1] ?? ""} – ${sasPlay.play}`
        : "&ensp;";

      const highlightShot = (
        containerRef: React.RefObject<HTMLDivElement | null>,
        activePlay: PlayEntry | null,
      ) => {
        const container = containerRef.current;
        if (!container) return;
        const shots = container.querySelectorAll<SVGGElement>("g.shot");
        shots.forEach((g) => {
          g.style.opacity = "0.05";
          g.style.transform = "scale(1)";
        });
        if (!activePlay) return;
        const suffix = `${activePlay.quarter} - ${activePlay.time}`;
        for (const g of shots) {
          const titleEl = g.querySelector("title");
          if (titleEl?.textContent?.includes(suffix)) {
            g.style.opacity = "1";
            g.style.transform = "scale(4)";
            break;
          }
        }
      };

      highlightShot(sasCourtRef, sasPlay);
      highlightShot(okcCourtRef, okcPlay);
    };

    const handleGame1Scroll = () => {
      const rect = scrollEl.getBoundingClientRect();
      const boundaryTop = boundaryEl.getBoundingClientRect().top;
      const scrolledPx = boundaryTop - rect.top;

      if (scrolledPx <= 0) {
        if (lastZone === "above") return;

        if (gameClockRef.current) gameClockRef.current.textContent = "12:00";
        if (quarterRef.current) quarterRef.current.textContent = "Q1";
        okcEl.innerHTML = "&ensp;";
        sasEl.innerHTML = "&ensp;";
        setBoxStats({
          OKC: makeEmptyTeamStats(thunderPlayers),
          SAS: makeEmptyTeamStats(spursPlayers),
        });
        setTeamScore({ OKC: 0, SAS: 0 });
        [sasCourtRef, okcCourtRef].forEach((ref) => {
          ref.current
            ?.querySelectorAll<SVGGElement>("g.shot")
            .forEach((g) => (g.style.opacity = "1"));
        });

        lastZone = "above";
        lastRenderedSecond = -1;
        return;
      }

      if (scrolledPx >= rect.height) {
        const finalSecond = Math.max(0, Math.floor(totalSeconds));
        if (lastZone === "below" && lastRenderedSecond === finalSecond) return;

        renderAtSecond(finalSecond);
        lastZone = "below";
        lastRenderedSecond = finalSecond;
        return;
      }

      const progress = Math.min(1, Math.max(0, scrolledPx / rect.height));
      const currentSecond = Math.max(0, Math.floor(progress * totalSeconds));

      if (lastZone === "active" && lastRenderedSecond === currentSecond) return;

      renderAtSecond(currentSecond);
      lastZone = "active";
      lastRenderedSecond = currentSecond;
    };

    window.addEventListener("scroll", handleGame1Scroll, { passive: true });
    handleGame1Scroll();

    return () => {
      window.removeEventListener("scroll", handleGame1Scroll);
    };
  }, [otTest, plays, gameSeconds]);

  useEffect(() => {
    const footerElement = footerRef.current;
    const courtElement = courtHeightDynamicRef.current;

    if (!footerElement || !courtElement) {
      return;
    }

    const maxCourtHeight = 520;

    const measureFooter = () => {
      const footerRect = footerElement.getBoundingClientRect();
      footerMetricsRef.current = {
        top: footerRect.top + window.scrollY,
        bottom: footerRect.bottom + window.scrollY,
      };
    };

    const loop = () => {
      const { top: footerTop, bottom: footerBottom } = footerMetricsRef.current;
      const footerHeight = footerBottom - footerTop;

      if (footerHeight > 0) {
        const viewportBottom = window.scrollY + window.innerHeight;
        const progress = (viewportBottom - footerTop) / footerHeight;
        const clampedProgress = Math.min(1, Math.max(0, progress));
        const nextHeight =
          courtHeight + (maxCourtHeight - courtHeight) * clampedProgress;
        courtElement.style.height = `${nextHeight}px`;
      }

      animationFrameRef.current = window.requestAnimationFrame(loop);
    };

    const onResize = () => {
      measureFooter();
    };

    measureFooter();
    animationFrameRef.current = window.requestAnimationFrame(loop);

    window.addEventListener("resize", onResize);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(onResize)
        : null;

    resizeObserver?.observe(footerElement);

    return () => {
      window.removeEventListener("resize", onResize);
      resizeObserver?.disconnect();

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [courtHeight]);

  return (
    <main className="">
      <div
        className="relative z-4 w-full bg-(--background)"
        style={{ height: `100dvh` }}
      >
        <div className="w-full h-full grid grid-cols-2 p-4">
          {/* use text effect from your codepen, both animating from center */}
          <div className="place-self-center flex flex-col items-center text-(--okc)">
            <p>Oklahoma City Thunder</p>
            <h1>OKC</h1>
            <small>64-18</small>
          </div>
          <div className="place-self-center flex flex-col items-center text-(--sas)">
            <p>San Antonio Spurs</p>
            <h1>SAS</h1>
            <small>62-20</small>
          </div>
        </div>
      </div>
      <div className="relative">
        {/* games nav */}
        <div
          className="absolute z-4"
          style={{ inset: `-${topLipHeight}px 0 0 0` }}
        >
          <div className="sticky z-2 top-0 w-full h-0">
            <div
              className="absolute z-10 top-4 left-1/2 -translate-x-1/2 w-full max-w-[966px] grid border-t border-b border-(--stroke) bg-(--background) duration-200 ease-in-out pointer-events-auto"
              style={{
                height: topLipHeight - 16,
                gridTemplateColumns: hasReachedBottom
                  ? "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
                  : "0fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
              }}
            >
              <div className="flex items-center justify-center border-r border-(--stroke) overflow-hidden">
                All
              </div>
              {games.map((game, i) => (
                <div
                  className="flex items-center justify-center border-r border-(--stroke) overflow-hidden"
                  key={i}
                >
                  <h4>{i + 1}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute z-3 inset-0">
          {/* solid background for grid */}
          <div className="sticky top-[100dvh] w-full h-0 flex items-end justify-stretch pointer-events-none">
            <div className="relative w-full h-screen p-4">
              <div className="absolute inset-[auto_0_0_0] px-4 pb-4 bg-(--background)">
                <div
                  className="relative border-t border-(--stroke) flex flex-col items-center justify-end"
                  style={{ paddingTop: topLipHeight }}
                >
                  <div style={{ height: courtHeight }}></div>
                </div>
              </div>
            </div>
          </div>
          {/* background grid for nav */}
          <div className="absolute inset-4 flex flex-col items-stretch">
            {/* insert games loop here eventually */}
            <div className="flex-1 flex items-stretch flex-col">
              <GameCard
                isInsideSticky={true}
                height={courtHeight + topLipHeight}
                game={1}
              />
              <div className="flex-1 relative">
                <GameGrid isInsideSticky={true} ot={otTest} />
              </div>
              <div style={{ height: `${courtHeight + topLipHeight}px` }}></div>
            </div>
          </div>
          {/* top lip */}
          <div className="sticky z-1 top-0 w-full h-4 px-4 bg-(--background) flex flex-col items-stretch justify-end">
            <div className="translate-y-px border-b border-(--stroke)"></div>
          </div>
          {/* court, play-by-play, boxscores */}
          <div className="sticky top-[100dvh] w-full h-0 flex items-end justify-stretch pointer-events-none">
            <div className="relative w-full h-screen p-4">
              <div className="absolute z-10 inset-[0_0_auto_0] h-4 bg-(--background)"></div>
              <div className="absolute z-10 inset-[auto_0_0_0] h-4 bg-(--background)"></div>
              <div
                className="absolute flex justify-between items-center"
                style={{
                  inset: `auto 16px ${courtHeight + topLipHeight + 16}px 16px`,
                }}
              >
                <div className="flex items-center gap-2 p-4 pointer-events-auto">
                  <div className="h-30 w-30 flex items-center justify-center">
                    <img
                      className="h-20"
                      src="/thunder-logo.svg"
                      alt="OKC Logo"
                    />
                  </div>
                  <h2 className="text-(--okc)">{teamScore.OKC}</h2>
                </div>
                <div className="flex items-center gap-2 p-4">
                  <h2 className="text-(--sas)">{teamScore.SAS}</h2>
                  <div className="h-30 w-30 flex items-center justify-center">
                    <img
                      className="h-22"
                      src="/spurs-logo.svg"
                      alt="SAS Logo"
                    />
                  </div>
                </div>
              </div>
              <div
                className="absolute z-10 left-0 right-0 h-0 px-4 pb-4"
                style={{ bottom: courtHeight + topLipHeight }}
              >
                <div
                  className="relative flex flex-col items-center justify-end"
                  style={{ paddingTop: topLipHeight }}
                >
                  <div
                    className="absolute inset-[0_0_auto_0] border-b border-(--stroke) bg-(--background) grid grid-cols-2 gap-2 py-1 pointer-events-auto"
                    ref={playBoundaryRef}
                  >
                    <small className="text-right" ref={OKCPlayRef}>
                      Example of OKC play
                    </small>
                    <small className="text-left" ref={SASPlayRef}>
                      Example of SAS play
                    </small>
                  </div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <h3
                      className="gameclock pointer-events-auto"
                      ref={gameClockRef}
                    >
                      12:00
                    </h3>
                    <small ref={quarterRef}>Q1</small>
                  </div>
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-(--stroke)"
                    style={{ height: topLipHeight }}
                  ></div>
                  <div
                    className="relative border border-(--stroke) bg-(--background) max-h-[calc((100dvw*50/94)-120px)]"
                    ref={courtHeightDynamicRef}
                    style={{ height: courtHeight }}
                  >
                    <div
                      className="absolute bottom-[calc(100vh-96px)] xl:bottom-auto xl:top-0 w-[calc(50dvw-16px)] xl:w-102 translate-x-52.5 xl:translate-x-0 translate-y-full xl:translate-y-0 border border-(--stroke) bg-(--background) overflow-x-scroll overflow-y-scroll pointer-events-auto"
                      style={{
                        transform: `translate(-100%, -${topLipHeight - 17}px)`,
                        left: -topLipHeight + 19,
                        height: courtHeight + topLipHeight - 18,
                      }}
                    >
                      <div className="grid grid-cols-[1fr_32px_40px_32px_32px_32px_32px_32px] h-6.5 pl-1.5 border-b border-(--stroke) text-(--stroke) min-w-[380px]">
                        <small className="self-center justify-self-start">
                          Player
                        </small>
                        <small className="place-self-center">PTS</small>
                        <small className="place-self-center">FG</small>
                        <small className="place-self-center">REB</small>
                        <small className="place-self-center">AST</small>
                        <small className="place-self-center">3PT</small>
                        <small className="place-self-center">STL</small>
                        <small className="place-self-center">BLK</small>
                      </div>
                      {thunderPlayers.map((player, i) => (
                        <div
                          className="boxscores grid grid-cols-[1fr_32px_40px_32px_32px_32px_32px_32px] py-0.5 pl-1.5 border-b border-(--stroke) text-(--stroke) min-w-[380px]"
                          key={i}
                        >
                          <p className="self-center justify-self-start">
                            {player.name[0]}. {player.name.split(" ")[1]}&ensp;
                            {i < 5 && (
                              <span style={{ opacity: 0.5 }}>
                                {player.position[0]}
                              </span>
                            )}
                          </p>
                          <p className="place-self-center">
                            {boxStats.OKC[player.name]?.pts ?? 0}
                          </p>
                          <p className="place-self-center">
                            {(boxStats.OKC[player.name]?.fgMade ?? 0) +
                              "-" +
                              (boxStats.OKC[player.name]?.fgAtt ?? 0)}
                          </p>
                          <p className="place-self-center">
                            {boxStats.OKC[player.name]?.reb ?? 0}
                          </p>
                          <p className="place-self-center">
                            {boxStats.OKC[player.name]?.ast ?? 0}
                          </p>
                          <p className="place-self-center">
                            {(boxStats.OKC[player.name]?.threePtMade ?? 0) +
                              "-" +
                              (boxStats.OKC[player.name]?.threePtAtt ?? 0)}
                          </p>
                          <p className="place-self-center">
                            {boxStats.OKC[player.name]?.stl ?? 0}
                          </p>
                          <p className="place-self-center">
                            {boxStats.OKC[player.name]?.blk ?? 0}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div
                      className="absolute bottom-[calc(100vh-96px)] xl:bottom-auto xl:top-0 w-[calc(50dvw-16px)] xl:w-102 -translate-x-52.5 xl:translate-x-0 translate-y-full xl:translate-y-0 border border-(--stroke) bg-(--background) overflow-scroll pointer-events-auto"
                      style={{
                        transform: `translate(100%, -${topLipHeight - 17}px)`,
                        right: -topLipHeight + 19,
                        height: courtHeight + topLipHeight - 18,
                      }}
                    >
                      <div className="grid grid-cols-[1fr_32px_40px_32px_32px_32px_32px_32px] h-6.5 pl-1.5 border-b border-(--stroke) text-(--stroke)">
                        <small className="self-center justify-self-start">
                          Player
                        </small>
                        <small className="place-self-center">PTS</small>
                        <small className="place-self-center">FG</small>
                        <small className="place-self-center">REB</small>
                        <small className="place-self-center">AST</small>
                        <small className="place-self-center">3PT</small>
                        <small className="place-self-center">STL</small>
                        <small className="place-self-center">BLK</small>
                      </div>
                      {spursPlayers.map((player, i) => (
                        <div
                          className="boxscores grid grid-cols-[1fr_32px_40px_32px_32px_32px_32px_32px] py-0.5 pl-1.5 border-b border-(--stroke) text-(--stroke) min-w-[380px]"
                          key={i}
                        >
                          <p className="self-center justify-self-start">
                            {player.name[0]}. {player.name.split(" ")[1]}&ensp;
                            {i < 5 && (
                              <span style={{ opacity: 0.5 }}>
                                {player.position[0]}
                              </span>
                            )}
                          </p>
                          <p className="place-self-center">
                            {boxStats.SAS[player.name]?.pts ?? 0}
                          </p>
                          <p className="place-self-center">
                            {(boxStats.SAS[player.name]?.fgMade ?? 0) +
                              "-" +
                              (boxStats.SAS[player.name]?.fgAtt ?? 0)}
                          </p>
                          <p className="place-self-center">
                            {boxStats.SAS[player.name]?.reb ?? 0}
                          </p>
                          <p className="place-self-center">
                            {boxStats.SAS[player.name]?.ast ?? 0}
                          </p>
                          <p className="place-self-center">
                            {(boxStats.SAS[player.name]?.threePtMade ?? 0) +
                              "-" +
                              (boxStats.SAS[player.name]?.threePtAtt ?? 0)}
                          </p>
                          <p className="place-self-center">
                            {boxStats.SAS[player.name]?.stl ?? 0}
                          </p>
                          <p className="place-self-center">
                            {boxStats.SAS[player.name]?.blk ?? 0}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="absolute z-1 inset-0 pointer-events-auto">
                      <div
                        className="sas_courts absolute top-0 right-0 w-50/94 flex justify-center"
                        style={{
                          transformOrigin: "bottom right",
                          transform: "rotate(90deg) translate(100%)",
                        }}
                        ref={sasCourtRef}
                      >
                        {/* add other game cards here eventually */}
                        <Game1_SAS />
                      </div>
                      <div
                        className="okc_courts absolute top-0 left-0 w-50/94 flex justify-center"
                        style={{
                          transformOrigin: "bottom left",
                          transform: "rotate(-90deg) translate(-100%)",
                        }}
                        ref={okcCourtRef}
                      >
                        {/* add other game cards here eventually */}
                        <Game1_OKC />
                      </div>
                    </div>
                    <Court />
                  </div>
                </div>
              </div>
              <div className="absolute inset-4 border-l border-r border-b border-(--stroke)"></div>
            </div>
          </div>
        </div>
        <div
          className="relative z-1 w-full p-4 flex flex-col items-stretch"
          style={{}}
        >
          {/* insert games loop here eventually */}
          <>
            <GameCard
              isInsideSticky={false}
              height={courtHeight + topLipHeight}
              game={1}
            />
            <div
              className="relative flex flex-col h-full items-center justify-between"
              style={{
                height: `${(gameSeconds / (48 * 60)) * gameScroll}vh`,
              }}
              ref={Game1ScrollRef}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-(--stroke)"></div>
              <GameGrid isInsideSticky={false} ot={otTest} />
              <Game1Spread spread={10} />
            </div>
            <div
              className="relative w-full"
              style={{ height: `${courtHeight + topLipHeight}px` }}
            ></div>
          </>
        </div>
      </div>
      <footer
        ref={footerRef}
        className="w-full bg-gray-200"
        style={{ height: `calc(100vh - ${courtHeight + topLipHeight + 14}px)` }}
      ></footer>
    </main>
  );
}
