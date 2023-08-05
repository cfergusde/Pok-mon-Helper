import Image from "next/image";
import TallGrass from "@assets/tallgrass.png";
import Potion from "@assets/potion.png";
import Trainer from "@assets/trainer.png";
import { useState } from "react";
import { LocationArea } from "util/location";

const ICON_SIZE = 100;

async function getEncounters(locationArea: LocationArea) {
  return await fetch(`api/encounters?locationAreaName=${locationArea}`).then(
    (res) => res.json()
  );
}

export default function Home({ searchParams }: any) {
  const locationArea = searchParams.location

  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row-reverse">
      <div className="main flex flex-col w-full lg:w-2/3 h-full">
        <div className="outline outline-gray-700 w-full h-1/5 centered">
          {locationArea}
        </div>
        <div className="outline outline-gray-700 w-full h-4/5 centered">
          Map Section
        </div>
        <div className="outline outline-gray-700 w-full h-1/5 centered">
          <div className="outline outline-gray-700 w-1/3 h-full centered">
            <Image
              src={TallGrass}
              alt="Encounters"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </div>
          <div className="outline outline-gray-700 w-1/3 h-full centered">
            <Image
              src={Potion}
              alt="Items"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </div>
          <div className="outline outline-gray-700 w-1/3 h-full centered">
            <Image
              src={Trainer}
              alt="Trainers"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </div>
        </div>
      </div>
      <div className="outline outline-gray-700 w-full h-full centered lg:w-1/3">
        Timeline Section
        {/* Make its own component - will need access to last major event, next major event, and minor events along the way */}
      </div>
    </main>
  );
}
