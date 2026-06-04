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
      className="relative w-full lg:grid lg:grid-cols-[275px_1fr_275px] border-b border-(--stroke)"
      style={{
        height: `${height}px`,
        opacity: isInsideSticky ? 0 : 1,
        pointerEvents: isInsideSticky ? "none" : "auto",
      }}
    >
      <div className="w-full h-full flex justify-center lg:[grid-area:1/2/2/3]">
        <div className="w-full h-full max-w-[900px] grid grid-cols-6 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-2 p-2">
          <div className="[grid-area:2/1/2/4] lg:[grid-area:1/1/1/2]">
            <PlayerCard info={gameInfo.okcPlayer} />
          </div>
          <div className="[grid-area:1/2/1/6] lg:[grid-area:1/2/1/3] flex justify-center">
            <div className="w-full max-w-[150px] lg:max-w-none h-full border border-(--stroke) rounded-xs flex flex-col items-stretch gap-1 overflow-hidden">
              <div
                className="flex-1 border-b border-(--stroke)"
                style={{
                  backgroundImage: `url(${gameInfo.headline.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="lg:min-h-11 flex items-center justify-center">
                <h3 className="text-center text-pretty">
                  {gameInfo.headline.print}
                </h3>
              </div>
            </div>
          </div>
          <div className="[grid-area:2/4/2/7] lg:[grid-area:1/3/1/4]">
            <PlayerCard info={gameInfo.sasPlayer} />
          </div>
        </div>
      </div>
    </div>
  );
}
