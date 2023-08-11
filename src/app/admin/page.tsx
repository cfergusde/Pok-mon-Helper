"use client";

import { useState } from "react";

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

const getClickCoords = (event: any) => {
  var e = event.target;
  var dim = e.getBoundingClientRect();
  return {
    x: Math.round(((event.clientX - dim.left) / dim.width) * 100),
    y: Math.round(((event.clientY - dim.top) / dim.height) * 100),
  };
};

export default function Admin() {
  const [imageUrl, setImageUrl] = useState("");
  const [coords, setCoords] = useState<Coords>();
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

  const onSubmit = (e: any) => {
    const location = e.target[0].value
    setImageUrl(`map/${location}/image.jpeg`);
    e.preventDefault();
  };

  const createDataPoint = (dataPoint: DataPoint) => {
    setDataPoints((old) => [...old, dataPoint]);
  };

  const pickCoords = (e: any) => {
    setCoords(getClickCoords(e));
  };

  return (
    <main className="centered w-screen h-screen flex-col text-black">
      <>
        <h1 className="text-white">Enter the location name</h1>
        <form onSubmit={onSubmit}>
          <input />
        </form>
        {imageUrl && (
          <div className="relative">
            <Circle x={coords?.x} y={coords?.y} />
            <img
              src={imageUrl}
              alt="image"
              onClick={pickCoords}
              className="z-1"
            />
          </div>
        )}
        {imageUrl && coords?.x && coords?.y && (
          <AddDataPointForm addDataPoint={createDataPoint} coords={coords} />
        )}
        {dataPoints.length > 0 && (
          <div>
            <textarea
              className="text-black"
              value={JSON.stringify(dataPoints)}
            />
          </div>
        )}
      </>
    </main>
  );
}

const AddDataPointForm = ({
  addDataPoint,
  coords,
}: {
  addDataPoint: (info: DataPoint) => void;
  coords: Coords;
}) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const formSubmit = () => {
    const dataPoint: DataPoint = {
      name: name,
      type: type,
      description: description,
      coords: coords,
    };
    addDataPoint(dataPoint);
    setName("");
    setType("");
    setDescription("");
  };
  return (
    <form
      className="text-white flex flex-col"
      onSubmit={(e) => {
        formSubmit();
        e.preventDefault();
      }}
    >
      <label>Enter Name</label>
      <input
        name="name"
        className="text-black"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Enter Type</label>
      <input
        name="type"
        className="text-black"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <label>Enter Description</label>
      <input
        name="description"
        className="text-black"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add data point</button>
    </form>
  );
};

const Circle = ({ x, y }: { x?: number; y?: number }) => {
  return (
    <div
      className="h-2 w-2 rounded-3xl absolute bg-blue-600 z-2"
      style={{ left: `${x}%`, top: `${y}%` }}
    />
  );
};
