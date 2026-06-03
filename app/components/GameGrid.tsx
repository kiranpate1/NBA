type props = {
  isInsideSticky: boolean;
  ot?: number;
};

export default function GameGrid({ isInsideSticky, ot }: props) {
  const regulationMinutes = 48;
  const overtimeCount = ot ?? 0;
  const overtimeMinutes = overtimeCount * 5;
  const hasOvertime = overtimeCount > 0;

  return (
    <div
      className={`${isInsideSticky ? "stickygrid" : "normalgrid"} absolute inset-0 grid`}
      style={{
        gridTemplateRows: `${regulationMinutes}fr ${overtimeMinutes}fr`,
      }}
    >
      <div className="absolute w-3/5 left-1/2 -translate-x-1/2 top-0 bottom-0 flex items-stretch justify-between">
        <div className="w-0 h-full border-l border-(--stroke) border-dotted"></div>
        <div className="w-0 h-full border-l border-(--stroke) border-dotted"></div>
        <div className="w-0 h-full border-l border-(--stroke) border-dotted"></div>
        <div className="w-px h-full"></div>
        <div className="w-0 h-full border-r border-(--stroke) border-dotted"></div>
        <div className="w-0 h-full border-r border-(--stroke) border-dotted"></div>
        <div className="w-0 h-full border-r border-(--stroke) border-dotted"></div>
      </div>
      <div className="relative w-full flex flex-col items-stretch justify-between">
        <div className="relative w-full h-0 border-b border-(--stroke)">
          <small className="absolute top-1 left-1">12:00 Q1</small>
          <small className="absolute top-1 right-1">Q1 12:00</small>
        </div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="relative w-full h-0 border-b border-(--stroke)">
          <small className="absolute bottom-0.75 left-1">END Q1</small>
          <small className="absolute bottom-0.75 right-1">Q1 END</small>
          <small className="absolute top-1 left-1">12:00 Q2</small>
          <small className="absolute top-1 right-1">Q2 12:00</small>
        </div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="relative w-full h-0 border-b border-(--stroke)">
          <small className="absolute bottom-0.75 left-1">END Q2</small>
          <small className="absolute bottom-0.75 right-1">Q2 END</small>
          <small className="absolute top-1 left-1">12:00 Q3</small>
          <small className="absolute top-1 right-1">Q3 12:00</small>
        </div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="relative w-full h-0 border-b border-(--stroke)">
          <small className="absolute bottom-0.75 left-1">END Q3</small>
          <small className="absolute bottom-0.75 right-1">Q3 END</small>
          <small className="absolute top-1 left-1">12:00 Q4</small>
          <small className="absolute top-1 right-1">Q4 12:00</small>
        </div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="w-full h-0 border-b border-(--stroke) border-dotted"></div>
        <div className="relative w-full h-0 border-b border-(--stroke)">
          <small className="absolute bottom-0.75 left-1">
            {hasOvertime ? "END REG" : "END"}
          </small>
          <small className="absolute bottom-0.75 right-1">
            {hasOvertime ? "REG END" : "END"}
          </small>
          {hasOvertime && (
            <>
              <small className="absolute top-1 left-1">{`05:00 OT1`}</small>
              <small className="absolute top-1 right-1">{`OT1 05:00`}</small>
            </>
          )}
        </div>
      </div>
      {hasOvertime && (
        <div className="w-full flex flex-col items-stretch justify-between">
          <div></div>
          {Array.from({ length: overtimeCount }, (_, i) => {
            const isFinalOt = i === overtimeCount - 1;

            return (
              <div
                key={`ot-end-${i + 1}`}
                className="relative w-full h-0 border-b border-(--stroke)"
              >
                <small className="absolute bottom-0.75 left-1">
                  {isFinalOt ? "END" : `END OT${i + 1}`}
                </small>
                <small className="absolute bottom-0.75 right-1">
                  {isFinalOt ? "END" : `OT${i + 1} END`}
                </small>
                {!isFinalOt && (
                  <>
                    <small className="absolute top-1 left-1">{`05:00 OT${i + 2}`}</small>
                    <small className="absolute top-1 right-1">{`OT${i + 2} 05:00`}</small>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
