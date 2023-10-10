
import Link from 'next/link'
import styles from '../app/page.module.css'
import Image from 'next/image'
export default function Footer() {

return (<footer className={styles.footer}>
        <div className={styles.x}>
        <a href='https://x.com/DadGippity' target='_blank'>
        Find us on{" "} 
        <Image
          // className={styles.logo}
          src="/x-logo.svg"
          alt="Find us on X / Twitter"
          width={15}
          height={15}
          priority
        />
        </a></div>
          <div className={styles.salim}>
          <a
            href="https://metasal.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            Salim Karim
          </a></div><span className={styles.salim}>
          <Link
            href="/privacy"
           >
            Privacy
          </Link>
</span>
{" | "}<span className={styles.salim}>
          <Link
            href="/tos"
          >
            Terms of Service
          </Link></span>
        </footer>)

}
