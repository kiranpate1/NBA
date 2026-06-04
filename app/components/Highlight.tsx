type props = {
  info: {
    team: "OKC" | "SAS";
    player: {
      name: string;
      position: string;
      number: number;
      imageUrl: string;
    };
    play: string;
    time: string;
    quarter: string;
    distance: string;
    result: "made" | "miss" | "other";
  };
};

export default function Highlight({ info }: props) {
  const playRaw = info.play;
  const playNoName = playRaw.substring(info.play.indexOf(" ") + 1);
  const description = playNoName.split("(")[0].trim();
  const matches = playNoName.match(/\(([^)]+)\)/g);

  let points = "";
  let assist = "";

  if (matches) {
    points = matches[0].replace(/[()]/g, "").replace(" PTS", "");
    if (matches.length >= 2) {
      assist = matches[1]
        .replace(/[()]/g, "")
        .replace(/(.+)\s(\d+)\sAST/, "$1 ($2)");
    }
  }

  return (
    <div className="w-full h-full grid grid-cols-2 gap-2 p-1 border border-(--stroke) bg-[rgba(246,244,245,0.5)] rounded-xs overflow-hidden pointer-events-auto">
      <div className="flex flex-col items-stretch">
        <img
          className="flex-1 pt-2 border border-(--stroke) rounded-xs object-cover"
          src={info.player.imageUrl || "/placeholder-player.png"}
          alt={info.player.name}
        />
        <div className="p-1 flex flex-col gap-0.5">
          <p className="smaller">
            {info.player.name[0]}. {info.player.name.split(" ")[1]}
          </p>
          <small>
            #{info.player.number} - {info.player.position}
          </small>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-1 p-1">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <h4 className="text-sm! bg-gray-300 px-1 rounded-sm">
              {info.time}
            </h4>
            <small>{info.quarter}</small>
          </div>
          <p className="text-xs opacity-70 text-pretty">{description}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs opacity-70">
            {points.length > 0 ? `PTS: ${points}` : ""}
          </p>
          <p className="text-xs opacity-70">
            {assist.length > 0 ? `AST: ${assist}` : "Unassisted"}
          </p>
        </div>
      </div>
    </div>
  );
}
