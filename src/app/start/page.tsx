"use client";

import { GymLeaders } from "components/GymLeaders";
import { ListBox } from "components/ListBox";
import Image from "next/image";
import crying_psyduck from "assets/crying_psyduck.png"

export default function Start() {
  return (
    <main className="w-screen h-screen">
      <div className="w-full h-40 flex justify-center items-center">
        <div className="w-4/5 h-20 bg-gray-500 flex justify-center items-center">
          <h1 className="font-bold text-4xl text-white">Pokemon Platinum Helper</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-8 text-4xl font-bold">
          Which gym did you last defeat?
        </h1>
        <ListBox index={0}>
          <Image src={crying_psyduck} alt="crying psyduck" width={50} height={50} />
        </ListBox>
        <GymLeaders select={() => alert("selected")} />
      </div>
    </main>
  );
}
