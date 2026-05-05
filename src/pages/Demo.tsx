import TubesCursor from "@/components/ui/tubes-curor";

export default function DemoOne() {
  return (
    <TubesCursor>
      {/* Hero content displayed over the canvas */}
      <div className="relative h-full flex flex-col items-center justify-center gap-2.5 z-10">
        <h1 className="m-0 p-0 text-white text-[80px] font-bold uppercase leading-none select-none [text-shadow:0_0_20px_rgba(0,0,0,1)]">
          Tubes
        </h1>
        <h2 className="m-0 p-0 text-white text-[60px] font-medium uppercase leading-none select-none [text-shadow:0_0_20px_rgba(0,0,0,1)]">
          Cursor
        </h2>
        <p className="m-0 p-0 text-white text-xl leading-none select-none [text-shadow:0_0_20px_rgba(0,0,0,1)]">
          Click to change colors
        </p>
      </div>
    </TubesCursor>
  );
}
