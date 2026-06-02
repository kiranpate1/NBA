type props = {
  info: {
    name: string;
    description: string;
    imageUrl: string;
  };
};

export default function PlayerCard({ info }: props) {
  return (
    <div className="border border-(--stroke) rounded-sm flex flex-col items-stretch justify-start gap-1">
      <div
        className="flex-1 border-b border-(--stroke)"
        style={{
          backgroundImage: `url(${info.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex flex-col gap-1 px-2 py-1.5">
        <small className="text-(--stroke)">Top performer</small>
        <p className="smaller">
          {`${info.name[0]}. ${info.name.split(" ")[1]}`}
          &ensp;
          <span className="opacity-60">{info.description}</span>
        </p>
      </div>
    </div>
  );
}
