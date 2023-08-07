import Cookies from "js-cookie";

export type LocationArea = {
  name: string
  displayName: string
  url: string
}

export const getDisplayName = (name: string) => {
  const partsOfName = name.split('-')
  const capitalized = partsOfName.map(word => word[0].toUpperCase())
  return capitalized.join(' ')
}

export function setLocationCookie(location: string) {
  if (location) {
    Cookies.set("pokehelper-location", location);
  }
}