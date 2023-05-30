import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import PlatinumImg from '../assets/platinum-logo-large.jpg'


export default function Home() {
  return (
    <main className={styles.main}>
      <p>
        Welcome to Pokemon helper. Click the game you want to use:
      </p>
      <div className={styles.gameSelection}>
        <Link href={'./Start'}>
            <Image 
                src={PlatinumImg}
                width={200}
                height={100}
            />
        </Link>
      </div>
    </main>
  )
}
