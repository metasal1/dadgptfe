'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Link from 'next/link'
export default function Privacy() {

  return (
    <main className={styles.main}>
           <h1 className={styles.heading}><Link href={'/'}>Dad Gippity</Link></h1>
      <div className={styles.grid}>
       <h1>
         Terms of Service
      </h1>

        <i><small>
          Last Updated: 2023-09-12
        </small>
        </i>

        <p>
          1. Introduction

          Welcome to DadGippity.com. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information. Your privacy is important to us, and we are committed to protecting your data.
          <br />
          2. Information We Collect

          We may collect various types of information when you visit or use Dadgippity.com:
          <br />

          2.1. Personal Information
          <br />

          When you create an account or interact with our website, we may collect personal information such as your name, email address, and other contact details.
          2.2. Usage Information
          <br />

          We gather data about your interactions with our website, including pages visited, features used, and the duration of your visits.
          2.3. Cookies and Tracking Technologies
          <br />

          Dadgippity.com may use cookies and similar technologies to enhance your experience. These technologies collect data about your browsing behavior and preferences.
          <br />

          3. How We Use Your Information

          We may use your information for the following purposes:
          <br />

          3.1. Providing Services
          <br />

          To offer and improve our services, respond to your requests, and manage your account.
          <br />

          3.2. Communication
          <br />

          To send you updates, newsletters, and other information related to our services.
          <br />

          3.3. Analytics
          <br />

          To analyze user behavior, trends, and preferences to improve our website and services.
          <br />

          4. Data Security
          <br />

          We take security seriously and employ measures to protect your personal information. However, please understand that no online method of transmission or storage is completely secure.
          <br />

          5. Third-Party Links
          <br />

          Dadgippity.com may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites.
          <br />

          6. Your Choices
          <br />

          You have the right to access, update, or delete your personal information. You can do so by contacting us at [contact@email.com].
          <br />

          7. Children's Privacy
          <br />

          Dadgippity.com is not intended for children under the age of 13, and we do not knowingly collect information from individuals in this age group.
          <br />

          8. Changes to this Privacy Policy
          <br />

          We may update this Privacy Policy to reflect changes in our practices or for legal reasons. We will notify you of any significant changes.
          <br />

          9. Contact Us
          <br />

          If you have any questions or concerns about this Privacy Policy, please contact us at [dadgippity@milysec.com].
        </p>
      </div>
      <Footer />
    </main>
  )
}
