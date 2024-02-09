import React from 'react'
import styles from './menu.module.css'

import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"what's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
      <MenuPosts category='travel'/>
      <MenuPosts category='culture'/>
      <MenuPosts category='food'/>
      <MenuPosts category='fashion'/>
      </div>
      <h2 className={styles.subtitle}>{"Discover by topics"}</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>{"Choosen by the editor"}</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
        <MenuPosts withImage={true} category='travel'/>
        <MenuPosts withImage={true} category='culture'/>
        <MenuPosts withImage={true} category='food'/>
        <MenuPosts withImage={true} category='fashion'/>
      </div>
    </div>
  )
}

export default Menu
