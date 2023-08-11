type MapProps = {
  location: string | undefined;
};

type DataPoint = {
  name: string;
  type: string;
  description: string;
  coords: Coords;
};
type Coords = {
  x: number;
  y: number;
};

export default function Map({ location }: MapProps) {
  const imgSrc = `/map/${location}/image.png`;
  const points = require(`../../public/map/${location}/points.json`);
  console.log(points);

  if (!location) {
    return <p>Could not find a map to this location</p>;
  }

  return (
    <div className=" w-full h-full centered">
      <div className="relative">
        {points?.map((point: DataPoint) => (
          <Circle x={point?.coords.x} y={point?.coords.y} />
        ))}
        <img src={imgSrc} alt="image" className="z-1 object-cover" />
      </div>
    </div>
  );
}

const Circle = ({ x, y }: { x?: number; y?: number }) => {
  return (
    <div
      className="h-2 w-2 rounded-3xl absolute bg-blue-600 z-2"
      style={{ left: `${x}%`, top: `${y}%` }}
    />
  );
};
