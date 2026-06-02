import { games } from "../info/games";
import PlayerCard from "./PlayerCard";

type props = {
  isInsideSticky: boolean;
  height: number;
  game: number;
};

export default function GameRecap({ isInsideSticky, height, game }: props) {
  const gameInfo = games[game - 1].info;
  return (
    <div
      className="relative w-full flex items-stretch justify-between border-b border-(--stroke)"
      style={{
        height: `${height}px`,
        opacity: isInsideSticky ? 0 : 1,
        pointerEvents: isInsideSticky ? "none" : "auto",
      }}
    >
      <div className="w-full max-w-[275px]"></div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[900px] grid grid-cols-3 gap-2 p-2">
          <PlayerCard info={gameInfo.okcPlayer} />
          <div className="border border-(--stroke) rounded-sm flex flex-col items-stretch gap-1">
            <div
              className="flex-1 border-b border-(--stroke)"
              style={{
                backgroundImage: `url(${gameInfo.headline.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="h-11 flex items-center justify-center">
              <h3 className="text-center">{gameInfo.headline.print}</h3>
            </div>
          </div>
          <PlayerCard info={gameInfo.sasPlayer} />
        </div>
      </div>
      <div className="w-full max-w-[275px]"></div>
    </div>
  );
}
