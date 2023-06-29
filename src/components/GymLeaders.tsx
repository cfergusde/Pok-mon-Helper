"use client";

import Image from "next/image";
import { ListBox } from "./ListBox";
import { useGymLeaders } from "hooks/use-gym-leaders";
import Link from "next/link";

type GymLeadersProps = {
  select: () => void;
};

// This is purely a display component right now. We will find out ways of making data-fetching components
//                            params    paramsType
export const GymLeaders = ({ select }: GymLeadersProps) => {
  // dynamically retrieve gym leaders with this hook
  const [leaders] = useGymLeaders();

  // HTML(TSX) to be returned
  return (
    // container for gym leaders
    <div className="grid grid-cols-2 gap-10 mt-10">
      {leaders.map((leader, index) => (
        // Each individual leader
        <Link href={`/game/${leader.name}`}>
          <ListBox key={leader.name} index={index + 1}>
            <Image
              src={leader.imgUrl}
              alt={leader.name}
              width={50}
              height={50}
            />
          </ListBox>
        </Link>
      ))}
    </div>
  );
};
