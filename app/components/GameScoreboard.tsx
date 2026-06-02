type props = {
  teamScore: {
    OKC: number;
    SAS: number;
  };
};

export default function GameScoreboard({ teamScore }: props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 p-4 pointer-events-auto">
        <div className="h-30 w-30 flex items-center justify-center">
          <img className="h-20" src="/thunder-logo.svg" alt="OKC Logo" />
        </div>
        <h2 className="text-(--okc)">{teamScore.OKC}</h2>
      </div>
      <div className="flex items-center gap-2 p-4 pointer-events-auto">
        <h2 className="text-(--sas)">{teamScore.SAS}</h2>
        <div className="h-30 w-30 flex items-center justify-center">
          <img className="h-22" src="/spurs-logo.svg" alt="SAS Logo" />
        </div>
      </div>
    </div>
  );
}
