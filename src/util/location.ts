import Cookies from "js-cookie";
import { StaticImageData } from "next/image";

export type LocationArea = {
  name: string;
  displayName: string;
  url: string;
};

export const getDisplayName = (name: string) => {
  const partsOfName = name.split("-");
  const capitalized = partsOfName.map((word) => word[0].toUpperCase());
  return capitalized.join(" ");
};

export function setLocationCookie(location: string) {
  if (location) {
    Cookies.set("pokehelper-location", location);
  }
}

export type LocationMap = {
  imgSrc: string;
  points: any;
};

// We can probably be smarter here by saving the route (/map/area/image.png) inside of the timeline json
export const locationMaps = new Map<string, LocationMap>([
  [
    "twinleaf-town-area",
    {
      imgSrc: "/map/twinleaf-town-area/image.png",
      points: require("../../public/map/twinleaf-town-area/points.json"),
    },
  ],
  // [
  //   "next-town",
  //   {
  //     imgSrc: require(''),
  //     points: require('')
  //   }
  // ]
]);
