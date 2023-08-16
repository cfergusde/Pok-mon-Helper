"use client";

import Image from "next/image";
import Link from "next/link";
import PlatinumImg from "../assets/platinum-logo-large.jpg";
import GitHubLogo from "../assets/githubLogo.png";
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
    <main className="flex flex-col justify-center items-center p-24 min-h-screen">
      <center>
      <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-blue-500">
        Pokéhelper
        <br></br>
        Walkthrough
      </p>
      </center>
      <div className="mt-8 bg-neutral-900 -200 p-3 border-double border-black border-8 border-gray-300">
        <Link href={"/start"}>
          <Image
            src={PlatinumImg}
            alt="Pokemon Platinum Img"
            width={200}
            height={100}
          />
        </Link>
      </div>
      <p className="text-1xl mt-40">
        A dynamic walkthrough of Pokemon Platinum to help you relive your glory days
      </p>
      <Link href={"https://github.com/cfergusde/Pok-mon-Helper"}>
          <Image
            src={GitHubLogo}
            alt="GitHub Logo"
            width={100}
            height={50}
          />
      </Link>
    </main>
  );
}
