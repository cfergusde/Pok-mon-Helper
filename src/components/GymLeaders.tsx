export type GymLeader = {
  name: string;
  imgUrl?: string; // shows optional value
};

type GymLeadersProps = {
  leaders: string[]; // todo: change this to GymLeader[]
};

//                            params    paramsType
export const GymLeaders = ({ leaders }: GymLeadersProps) => {
  // HTML(TSX) to be returned
  return (
    // container for gym leaders
    <div className="grid grid-cols-2">
      {leaders.map((leader) => (
        // Each individual leader
        <p key={leader} className="text-red-500">{leader}</p>
      ))}
    </div>
  );
};
