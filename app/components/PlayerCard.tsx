type props = {
  info: {
    name: string;
    description: string;
    imageUrl: string;
  };
};

export default function PlayerCard({ info }: props) {
  return (
    <div className="w-full h-full border border-(--stroke) rounded-xs flex flex-row lg:flex-col items-center lg:items-stretch justify-stretch lg:justify-start gap-1 overflow-hidden">
      <div
        className="hidden sm:block max-w-40 lg:max-w-none h-full flex-1 border-r lg:border-r-0 lg:border-b border-(--stroke)"
        style={{
          backgroundImage: `url(${info.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-full sm:w-auto flex flex-col items-center sm:items-start gap-1 px-2 py-1.5">
        <small className="text-(--stroke)text-center sm:text-left">
          Top performer
        </small>
        <p className="smaller text-center sm:text-left text-pretty">
          {`${info.name[0]}. ${info.name.split(" ")[1]}`}
          &ensp;
          <span className="opacity-60">{info.description}</span>
        </p>
      </div>
    </div>
  );
}
