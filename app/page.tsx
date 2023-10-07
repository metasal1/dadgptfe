import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by downloading from your favorite app store.
        </p>
        <div>
          <a
            href="https://metasal.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            Salim Karim
          </a>
        </div>
      </div>
        <h1 className={styles.heading}>Dad Gippity</h1>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/favicon.png"
          alt="Dad Gippity"
          width={180}
          height={180}
          priority
        />
      </div>
<span>Currently in Beta!</span>
      <div className={styles.grid}>
        <a
          href="https://testflight.apple.com/join/YyjbC9QA"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Apple <span>-&gt;</span>
          </h2>
         <Image
          className={styles.logo}
          src="/app-store.svg"
          alt="Download from the App Store"
          width={180}
          height={90}
          priority
        />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.milysec.dadgippity"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Android <span>-&gt;</span>
          </h2>
          <Image
          className={styles.logo}
          src="/google-play-badge.webp"
          alt="Download from the Google Play Store"
          width={230}
          height={90}
          priority
        />
        </a>
      </div>
    </main>
  )
}
