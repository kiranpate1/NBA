"use client";

import { useEffect, useRef, useState } from "react";
import Court from "./components/Court";
import GameGrid from "./components/GameGrid";
import GameCard from "./components/GameCard";
import Game1_SAS from "./games/Game1_SAS";
import Game1_OKC from "./games/Game1_OKC";
import { games } from "./info/games";
import { spursPlayers, thunderPlayers } from "./info/players";
import Game1Spread from "./games/Game1Spread";

type PlayEntry = {
  time: string;
  quarter: string;
  team: "OKC" | "SAS";
  player: string;
  play: string;
  result: "made" | "miss" | "other";
};

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
  const [plays, setPlays] = useState<PlayEntry[]>([]);
  const [gameSeconds, setGameSeconds] = useState((48 + otTest * 5) * 60);

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

    const handleGame1Scroll = () => {
      const rect = scrollEl.getBoundingClientRect();
      const boundaryTop = boundaryEl.getBoundingClientRect().top;
      const scrolledPx = boundaryTop - rect.top;
      const progress = Math.min(1, Math.max(0, scrolledPx / rect.height));
      const currentSeconds = progress * totalSeconds;

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
        ? okcPlay.result === "made"
          ? "<b style='color: var(--make)'>✓</b>"
          : okcPlay.result === "miss"
            ? "<b style='color: var(--miss)'>✗</b>"
            : ""
        : "";
      const sasResult = sasPlay
        ? sasPlay.result === "made"
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
        style={{ height: `calc(100dvh - ${courtHeight + topLipHeight}px)` }}
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
        <div className="absolute z-3 inset-0">
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
          <div className="sticky z-1 top-0 w-full h-4 px-4 bg-(--background) flex flex-col items-stretch justify-end">
            <div className="translate-y-px border-b border-(--stroke)"></div>
          </div>
          <div className="sticky top-[100dvh] w-full h-0 flex items-end justify-stretch pointer-events-none">
            <div className="relative w-full h-screen p-4">
              <div className="absolute z-10 inset-[0_0_auto_0] h-4 bg-(--background)"></div>
              <div className="absolute z-10 inset-[auto_0_0_0] h-4 bg-(--background)"></div>
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
                      className="absolute bottom-0 w-100 translate-x-full border-l border-r border-(--stroke)"
                      style={{
                        right: -topLipHeight + 19,
                        height: courtHeight + topLipHeight - 19,
                      }}
                    ></div>
                    <div className="absolute z-1 inset-0 pointer-events-auto">
                      <div
                        className="sas_courts absolute top-0 right-0 w-50/94 flex justify-center"
                        style={{
                          transformOrigin: "bottom right",
                          transform: "rotate(90deg) translate(100%)",
                        }}
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
        style={{ height: `calc(100vh - ${courtHeight + topLipHeight}px)` }}
      ></footer>
    </main>
  );
}
