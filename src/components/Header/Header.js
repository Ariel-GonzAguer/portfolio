import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import styles from './Header.module.css'
import code_icon from './code_icon.png'
import Footer from '../Footer/Footer'

export default function Header() {
  return (
    <section className={styles.sectionHeader} >

      <header className={styles.header}>
        <NavLink aria-label='link' className={styles.homeLink} to="/">
          <img src={code_icon} alt="code icon" className={`${styles.codeIcon} ${styles.rollInLeft}`} />
          <span aria-label='intro' className={`${styles.rollInLeft} ${styles.back}`}>Intro</span>
        </NavLink>

        <div role="banner" className={styles.divContainer}>
          <h1 ria-label="name of the devoloper" className={`${styles.h1} ${styles.bounceInTop}`}>  Arie GonzAgüer</h1>
          <p aria-label="portpholio description" className={`${styles.p} ${styles.slideInFwdCenter}`}>Simple, Neat, Accessible Web Design</p>
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