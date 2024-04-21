import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={`${styles.bounceInRight} ${styles.slideInRight}`}>
      <ul className={styles.ul}>
        <li className={styles.li}><NavLink to='/projects'>Projects</NavLink></li>
        <li className={styles.li}><NavLink to='/aboutMe'>+About Me</NavLink></li>
        <li className={styles.li}><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )

}
