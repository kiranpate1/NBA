import { games } from "../info/games";

type props = {
  isInsideSticky: boolean;
  height: number;
  game: number;
};

export default function GameCard({ isInsideSticky, height, game }: props) {
  return (
    <div
      className="relative z-1 w-full flex flex-col items-center justify-center gap-2"
      style={{
        height: `${height}px`,
        opacity: isInsideSticky ? 0 : 1,
        pointerEvents: isInsideSticky ? "none" : "auto",
        backgroundColor: isInsideSticky ? "transparent" : "var(--background)",
      }}
    >
      <h2 className="">Game {game}</h2>
      <p>{games[game - 1].date}</p>
      <small>{games[game - 1].arena}</small>
    </div>
  );
}
