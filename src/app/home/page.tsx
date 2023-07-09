import Image from "next/image";
import TallGrass from "@assets/tallgrass.png";
import Potion from "@assets/potion.png";
import Trainer from "@assets/trainer.png";

const ICON_SIZE = 100;

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row-reverse">
      <div className="main flex flex-col w-full lg:w-2/3 h-full">
        <div className="outline outline-black w-full h-1/5 centered">
          Home Page Banner
        </div>
        <div className="outline outline-black w-full h-3/5 centered">
          Map Section
        </div>
        <div className="outline outline-black w-full h-1/5 centered">
          <div className="outline outline-black w-1/3 h-full centered">
            <Image
              src={TallGrass}
              alt="Encounters"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </div>
          <div className="outline outline-black w-1/3 h-full centered">
            <Image
              src={Potion}
              alt="Items"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </div>
          <div className="outline outline-black w-1/3 h-full centered">
            <Image
              src={Trainer}
              alt="Trainers"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </div>
        </div>
      </div>
      <div className="outline outline-black w-full h-full centered lg:w-1/3">
        Timeline Section
        {/* Make its own component - will need access to last major event, next major event, and minor events along the way */}
      </div>
    </main>
  );
}
