import ColorThief from "../utils/ColorThief.js";

export function App() {
  const colorThief = new ColorThief();

  const handleMouseEnter = (e: MouseEvent) => {
    const colors = colorThief.getPalette(e.target, 3, 10);
    const rgbList = colorThief.convertColorRgb(colors);
    const gradient = `linear-gradient(to bottom, ${rgbList[0]}, ${rgbList[1]}, ${rgbList[2]})`;
    document.body.style.background = gradient;
  };

  const handleMouseLeave = () => {
    document.body.style.background = "#fff";
  };

  return (
    <div className="h-full w-full flex items-center justify-center ">
      <div className="grid gap-20 grid-cols-3 cursor-pointer">
        {new Array(3).fill(0).map((_, index) => {
          return (
            <img
              style={{
                height: "400px",
              }}
              crossOrigin="anonymous"
              key={index}
              alt="图片"
              src={`https://picsum.photos/800/800`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
