import Image from "next/image";

export type GymLeader = {
  name: string;
  imgUrl?: string; // shows optional value
};

type GymLeadersProps = {
  leaders: string[]; // todo: change this to GymLeader[]
};

// Exmaple of sanitization. We do this a lot to make strings consistent
const sanitizeStr = (str: string) => {
  return str.toLowerCase().replace(' ','-')
}

// This is purely a display component right now. We will find out ways of making data-fetching components
//                            params    paramsType
export const GymLeaders = ({ leaders }: GymLeadersProps) => {
  // HTML(TSX) to be returned
  return (
    // container for gym leaders
    <div className="grid grid-cols-2">
      {leaders.map((leader) => (
        // Each individual leader
        <div>
          <p key={leader} className="text-red-500">{leader}</p>
          <Image src={`https://img.pokemondb.net/sprites/trainers/diamond-pearl/${sanitizeStr(leader)}.png`} alt="roark" width={50} height={50}/>
        </div>
      ))}
    </div>
  );
};
