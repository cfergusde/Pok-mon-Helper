import { sanitizeStr } from "util/utils";

export type GymLeader = {
  name: string;
  imgUrl: string; // shows optional value
};

export const useGymLeaders = () => {
  const baseUrl = "https://img.pokemondb.net/sprites/trainers/diamond-pearl";
  const leaderStrings: string[] = [
    "Roark",
    "Gardenia",
    "Fantina",
    "Maylene",
    "Crasher Wake",
    "Byron",
    "Candice",
    "Volkner",
  ];

  const leaders: GymLeader[] = leaderStrings.map((leader) => {
    return { name: sanitizeStr(leader), imgUrl: `${baseUrl}/${sanitizeStr(leader)}.png` };
  });

  return [leaders]
};
