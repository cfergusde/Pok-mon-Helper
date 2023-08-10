import Image, { StaticImageData } from "next/image";
import { ListBox } from "./ListBox";
import gymLeaders from "@app/(data)/gymLeaders.json";
import Link from "next/link";

export type GymLeaderProps = {
  src: StaticImageData | string
  alt: string
  gymLocation: string
  index: number
}

export const GymLeaders = () => {
  // dynamically retrieve gym leaders with this hook
  const leaders = gymLeaders.leaders;

  // HTML(TSX) to be returned
  return (
    // container for gym leaders
    <div className="grid grid-cols-2 gap-10 mt-10">
      {leaders.map((leader,index) => (
        // Each individual leader
        <GymLeader src={leader.imgUrl} alt={leader.name} gymLocation={leader.gymLocation} index={index+1} key={leader.name} />
      ))}
    </div>
  );
};

export const GymLeader = ({ src, alt, gymLocation, index }: GymLeaderProps) => {
  return (
    <Link href={`/home?location=${gymLocation}&lastGym=${gymLocation}`} prefetch={false}>
      <ListBox
        index={index}
      >
        <Image
          src={src}
          alt={alt}
          width={50}
          height={50}
        />
      </ListBox>
    </Link>
  );
};
