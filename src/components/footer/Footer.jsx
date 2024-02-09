import React from 'react'
import styles from "./footer.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
            <div className={styles.logo}>
              {/* <Image src="/logo.png" alt="logo" width={50} height={50} /> */}
              <h1 className={styles.logoText}>Bibliotheca</h1>
            </div>
            <div className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos dolore error voluptas impedit commodi provident! Quibusdam, voluptatibus!
            </div>
            <div className={styles.icons}>
              <Image src="/facebook.png" alt="facebook" width={18} height={18} />
              <Image src="/instagram.png" alt="instagram" width={18} height={18} />
              <Image src="/youtube.png" alt="linkedin" width={18} height={18} />
            </div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">Home</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">Style</Link>
            <Link href="/">Fashion</Link>
            <Link href="/">Coding</Link>
            <Link href="/">Travel</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Socials</span>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Youtube</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer