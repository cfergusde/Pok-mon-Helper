import Image from 'next/image'
import Link from 'next/link'
import PlatinumImg from '../assets/platinum-logo-large.jpg'
import Black2Img from '../assets/Black2Logo.png'

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <p className="bg-amber-300 text-sky-700 font-mono font-bold text-4xl text-black p-2 border-x-4 border-sky-700">
        Welcome to Pokéhelper! Click the game you want to use below:
      </p>
      <div className="border-solid border-black border-2 hover:border-dotted">
        <Link href={'./start'}>
            <Image 
                src={PlatinumImg}
                alt="Pokemon Platinum Img"
                width={200}
                height={100}
            />
        </Link>
      </div>
      <div className="border-solid border-black border-2 hover:border-dotted p-2">
        <Link href={'./start'}>
          <Image
            src={Black2Img}
            alt="Pokemon Black 2 Img"
            width={200}
            height={100}
          />
        </Link>
      </div>
    </main>
  )
}
