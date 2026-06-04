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
  return (
    <div className="w-full h-full flex items-center gap-4 p-4 border border-(--stroke) bg-[rgba(246,244,245,0.5)] rounded-xs overflow-hidden pointer-events-auto ">
      <div className="h-12 w-12 flex items-center justify-center">
        <img
          className="h-10"
          src={info.team === "OKC" ? "/thunder-logo.svg" : "/spurs-logo.svg"}
          alt={`${info.team} Logo`}
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="text-sm">
          {info.player.name} ({info.player.position}, #{info.player.number})
        </p>
        <p className="text-xs opacity-70">{info.play}</p>
        <p className="text-xs opacity-70">
          {info.time} - {info.quarter} - {info.distance}
        </p>
      </div>
    </div>
  );
}
