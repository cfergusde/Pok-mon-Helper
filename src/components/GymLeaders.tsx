"use client";

import Image, { StaticImageData } from "next/image";
import { ListBox } from "./ListBox";
import gymLeaders from "@app/(data)/gymLeaders.json";
import Link from "next/link";
import Cookies from "js-cookie";

export type GymLeaderProps = {
  src: StaticImageData | string;
  alt: string;
  gymLocation: string;
};

export const GymLeaders = () => {
  // dynamically retrieve gym leaders with this hook
  const leaders = gymLeaders.leaders;

  // HTML(TSX) to be returned
  return (
    // container for gym leaders
    <div className="grid grid-cols-2 gap-10 mt-10">
      {leaders.map((leader, index) => (
        // Each individual leader
        <GymLeader
          src={leader.imgUrl}
          alt={leader.name}
          gymLocation={leader.gymLocation}
          key={leader.name}
        />
      ))}
    </div>
  );
};

export const GymLeader = ({ src, alt, gymLocation }: GymLeaderProps) => {
  const setCookies = (gymLocation: string) => {
    Cookies.set("pokehelper-location", gymLocation);
    Cookies.set("pokehelper-lastGym", gymLocation);
  };
  return (
    <Link href={"/home"} onClick={() => setCookies(gymLocation)}>
      <ListBox index={0}>
        <Image src={src} alt={alt} width={50} height={50} />
      </ListBox>
    </Link>
  );
};
