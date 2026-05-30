type props = {
  isInsideSticky: boolean;
  height: number;
  game: number;
};

export default function GameCard({ isInsideSticky, height, game }: props) {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center gap-2"
      style={{ height: `${height}px`, opacity: isInsideSticky ? 0 : 1 }}
    >
      <h2>Game {game}</h2>
      <p>May 18, 2026 @ 7:30pm</p>
      <small>Chesapeake Energy Arena, OKC</small>
    </div>
  );
}
