type props = {
  teamScore: {
    OKC: number;
    SAS: number;
  };
};

export default function GameScoreboard({ teamScore }: props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-2 p-2 lg:p-4 pointer-events-auto">
        <div className="h-12 lg:h-30 w-12 lg:w-30 flex items-center justify-center">
          <img
            className="h-10 lg:h-20"
            src="/thunder-logo.svg"
            alt="OKC Logo"
          />
        </div>
        <h2 className="text-(--okc) text-right">{teamScore.OKC}</h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-2 p-2 lg:p-4 pointer-events-auto">
        <h2 className="text-(--sas) text-left">{teamScore.SAS}</h2>
        <div className="h-12 lg:h-30 w-12 lg:w-30 flex items-center justify-center">
          <img className="h-11 lg:h-22" src="/spurs-logo.svg" alt="SAS Logo" />
        </div>
      </div>
    </div>
  );
}
