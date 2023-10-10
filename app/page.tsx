'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import JSConfetti from 'js-confetti'
import Footer from '@/components/Footer'

export default function Home() {

const [email, setEmail] = useState('')
const [isEmailValid, setIsEmailValid] = useState(false);
const [statusMessage, setStatusMessage] = useState('');
const [isLoading, setIsLoading] = useState(false);

const handleConfettiClick = () => {

      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti({
      emojis: ['👨🏽','👴🏿','👨'],
      })
}

          const handleEmailChange = (e:any) => {
              setEmail(e.target.value);
              console.log(e.target.value)
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              setIsEmailValid(emailRegex.test(e.target.value));
          };

          const handleWaitlistClick = async () => {
              console.log('submitting email', email)
              setIsLoading(true);
              try {
                const signup = await fetch('https://api.getwaitlist.com/api/v1/waiter', {
                  method: 'POST',
                  redirect: 'follow',
                  headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({  
                  "email": email,
                  "waitlist_id": 11075
                }),
              });

    const response = await signup.json();
    console.log(response)

   if (signup.ok) {
        setStatusMessage('You have been added to the waitlist.');
        handleConfettiClick();
        setEmail('');
      } else {
        setStatusMessage('There was an error adding you to the waitlist.');
      }
    }
    catch (error) {
      console.log(error)  
      setStatusMessage('There was an error adding you to the waitlist.');
    }
setIsLoading(false);
}

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by downloading from your favorite app store.
        </p>
        
      </div>
        <h1 className={styles.heading}>Dad Gippity</h1>
      <div className={styles.center}>
        <Image
          // className={styles.logo}
          src="/favicon.png"
          alt="Dad Gippity"
          width={180}
          height={180}
          priority
        />
      </div>
      {/* <span>Currently in Beta!</span> */}
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        className={styles.email}
        placeholder="Enter your email"
        required
      />

      <button
        className={styles.waitlistButton}
        onClick={handleWaitlistClick}
        disabled={!isEmailValid || isLoading}
      >
      {isLoading ? (
          <div className={styles.loader}></div>  // Show loader if loading
        ) : (
          'Join Waitlist'  // Show text if not loading
        )}

      </button>
     
    {statusMessage && (
        <div className={styles.statusMessage}>
          {statusMessage}
        </div>
      )}
      <div className={styles.grid}>
        <a
          href="https://testflight.apple.com/join/YyjbC9QA"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <h2>
            Apple <span>-&gt;</span>
          </h2> */}
         <Image
          // className={styles.logo}
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
          {/* <h2>
            Android <span>-&gt;</span>
          </h2> */}
          <Image
          // className={styles.logo}
          src="/google-play-badge.webp"
          alt="Download from the Google Play Store"
          width={230}
          height={90}
          priority
        />
        </a>
      </div>
     <Footer />
    </main>
  )
}
