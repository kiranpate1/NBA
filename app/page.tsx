import Court from "./components/Court";
import GameGrid from "./components/GameGrid";
import Game1_SA from "./games/Game1_SA";
import Game1_OKC from "./games/Game1_OKC";

export default function Home() {
  const courtHeight = 160;
  const gameScroll = 400; // in vh
  const topLipHeight = 80;
  return (
    <main className="">
      <div className="relative">
        <div className="absolute z-3 inset-0">
          <div className="sticky top-[100dvh] w-full h-0 flex items-end justify-stretch pointer-events-none">
            <div className="relative w-full h-screen p-4">
              <div className="absolute inset-[auto_0_0_0] px-4 pb-4 bg-(--background)">
                <div
                  className="relative border-t border-(--stroke) flex flex-col items-center justify-end"
                  style={{ paddingTop: topLipHeight }}
                >
                  <div style={{ height: courtHeight }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-4 flex flex-col items-stretch">
            {/* insert games loop here eventually */}
            <div className="flex-1 flex items-stretch flex-col">
              <div className="flex-1 relative">
                <GameGrid />
              </div>
              <div style={{ height: `${courtHeight + topLipHeight}px` }}></div>
            </div>
          </div>
          <div className="sticky z-1 top-0 w-full h-4 px-4 bg-(--background) flex flex-col items-stretch justify-end">
            <div className="translate-y-px border-b border-(--stroke)"></div>
          </div>
          <div className="sticky top-[100dvh] w-full h-0 flex items-end justify-stretch pointer-events-none">
            <div className="relative w-full h-screen p-4">
              <div className="absolute z-10 inset-[0_0_auto_0] h-4 bg-(--background)"></div>
              <div className="absolute z-10 inset-[auto_0_0_0] h-4 bg-(--background)"></div>
              <div className="absolute inset-[auto_0_0_0] px-4 pb-4">
                <div
                  className="relative border-t border-(--stroke) flex flex-col items-center justify-end"
                  style={{ paddingTop: topLipHeight }}
                >
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-(--stroke)"
                    style={{ height: topLipHeight }}
                  ></div>
                  <div
                    className="relative pointer-events-auto border border-(--stroke) bg-(--background)"
                    style={{ height: courtHeight }}
                  >
                    <div className="absolute inset-0">
                      <div
                        className="sa_courts absolute top-0 right-0 w-50/94 flex justify-center"
                        style={{
                          transformOrigin: "bottom right",
                          transform: "rotate(90deg) translate(100%)",
                        }}
                      >
                        <Game1_SA />
                      </div>
                      <div
                        className="okc_courts absolute top-0 left-0 w-50/94 flex justify-center"
                        style={{
                          transformOrigin: "bottom left",
                          transform: "rotate(-90deg) translate(-100%)",
                        }}
                      >
                        <Game1_OKC />
                      </div>
                    </div>
                    <Court />
                  </div>
                </div>
              </div>
              <div className="absolute inset-4 border-l border-r border-b border-(--stroke)"></div>
            </div>
          </div>
        </div>
        <div
          className="relative z-1 w-full p-4 flex flex-col items-stretch"
          style={{}}
        >
          {/* insert games loop here eventually */}
          <div
            className="relative flex flex-col h-full items-center justify-between"
            style={{
              height: `${gameScroll}vh`,
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-(--stroke)"></div>
            <GameGrid />
            <h1 className="text-4xl font-bold">Hello, Next.js!</h1>
            <p className="mt-4 text-lg text-gray-600">
              This is a simple Next.js application.
            </p>
            <h1 className="text-4xl font-bold">Hello, Next.js!</h1>
            <p className="mt-4 text-lg text-gray-600">
              This is a simple Next.js application.
            </p>
            <h1 className="text-4xl font-bold">Hello, Next.js!</h1>
            <p className="mt-4 text-lg text-gray-600">
              This is a simple Next.js application.
            </p>
          </div>
          <div
            className="relative w-full"
            style={{ height: `${courtHeight + topLipHeight}px` }}
          ></div>
        </div>
      </div>
      <footer className="w-full h-[50vh] bg-gray-200"></footer>
    </main>
  );
}
