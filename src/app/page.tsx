"use client";

import Image from "next/image";
import Link from "next/link";
import PlatinumImg from "../assets/platinum-logo-large.jpg";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function Home() {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("pokehelper-location")) {
      setTimeout(() => {
        router.replace("/home");
        router.refresh();
      }, 2000);
    }
    console.log("finding your game");
  }, [router, Cookies]);

  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <p className="bg-amber-300 text-sky-700 font-mono font-bold text-4xl p-2 border-x-4 border-sky-700">
        Welcome to Pokéhelper!
      </p>
      <div className="border-solid border-black border-2 hover:border-dotted">
        <Link href={"/start"}>
          <Image
            src={PlatinumImg}
            alt="Pokemon Platinum Img"
            width={200}
            height={100}
          />
        </Link>
      </div>
    </main>
  );
}
