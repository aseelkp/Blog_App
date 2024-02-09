import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
      Get ready Let&apos;s dive into edebiyat     {/* Get ready Let's dive into edebiyat  */}
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg"  alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, magni.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consequatur quam, suscipit dolores unde praesentium fugit. Eligendi maiores nobis molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. 
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>  
    

  )
}

export default Featured