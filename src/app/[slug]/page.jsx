import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'
const SinglePage = () => {
  return (
    <div className={styles.container}>
     <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                    <Image src='/p1.jpeg' fill alt='user' className={styles.avatar} />
                </div>
                 <div className={styles.userTextContainer}>
                    <span className={styles.username}>John Doe
                    </span>
                    <span className={styles.date}>01.12.2023
                    </span>
                 </div>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' fill alt='' className={styles.image}/>
        </div>
     </div>
     <div className={styles.content}>
        <div className={styles.post}>
           <div className={styles.desc}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, doloribus ab? Eius, explicabo. Placeat saepe nostrum molestiae provident totam earum.</p>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>At ab ex beatae similique laborum? Dolores magni at nisi porro explicabo possimus sit expedita, quisquam praesentium facilis. Quibusdam, quia.</p>
              <p>Quas voluptas dolorem dolorum illo eos quam nobis, rerum mollitia veritatis repellendus, sequi, perferendis in perspiciatis dolore quia aut nihil?</p>
              <p>Blanditiis, velit porro sed inventore ipsa quis deleniti adipisci, repellendus mollitia eligendi voluptatibus? Qui error quam quaerat id ad est?</p>
           </div>
           <div className={styles.comment}>
            <Comments />
           </div>
        </div>
        <Menu />
     </div>
    </div>
  )
}

export default SinglePage