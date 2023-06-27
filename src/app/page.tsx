import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import PlatinumImg from '../assets/platinum-logo-large.jpg'


export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <p>
        Welcome to Pokemon helper. Click the game you want to use:
      </p>
      <div className={styles.gameSelection}>
        <Link href={'./Start'}>
            <Image 
                src={PlatinumImg}
                alt="Pokemon Platinum Img"
                width={200}
                height={100}
            />
        </Link>
      </div>
    </main>
  )
}
