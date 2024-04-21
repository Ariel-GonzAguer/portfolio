import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import styles from './Header.module.css'
import code_icon from './code_icon.png'
import Footer from '../Footer/Footer'

export default function Header() {
  return (
    <section>

      <header className={styles.header}>
        <NavLink className={styles.homeLink} to="/">
          <img src={code_icon} alt="code icon" className={`${styles.codeIcon} ${styles.rollInLeft}`} />
          <span className={styles.rollInLeft}>Home</span>
        </NavLink>
        <div className={styles.divContainer}>
          <h1 className={`${styles.h1} ${styles.bounceInTop}`}>  Arie GonzAgüer</h1>
          <p className={`${styles.p} ${styles.slideInFwdCenter}`}>Simple, Neat, Accessible Web Design</p>
        </div>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>

    </section>

  )
}