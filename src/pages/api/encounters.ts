import { NextApiRequest, NextApiResponse } from "next";
import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();

export default async function getEncounters(req: NextApiRequest, res: NextApiResponse) {
  // call the poke api here and retrieve encounters information
  const { locationAreaName } = req.query

  const encounters = await P.getLocationAreaByName(locationAreaName as string)
    .then((response) => {
      const data = response.pokemon_encounters;
      const pokemon = data.map((pokeObj) => pokeObj.pokemon.name);
      return pokemon;
    })
    .catch((error) => {
      console.log("There was an ERROR: ", error);
    });

  if (encounters) {
    res.status(200).json(encounters);
  } else {
    res.status(404).json("error: encounters not found");
  }
}
