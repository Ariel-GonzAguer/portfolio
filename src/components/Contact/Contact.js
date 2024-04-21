import React from 'react'
import styles from './Contact.module.css'

import github from '../Technologies/icons/github.svg'
import linkedin from '../Technologies/icons/linkedin.svg'
import gmail from '../Technologies/icons/gmail.svg'

export default function Contact() {
  return (
    <>
      <section id='contact' className={styles.contactSection}>
      <h1 className={styles.contactH1}>Contact</h1>
        <div>
          <p>I would love to participate in your projects. I can design, write code, make unit tests and made UX Research.<br />
            I can work in place (depending on location) or remotely, I perform very well when working in a team as well as
            alone.<br />
            Together we can create something beautiful and fun.</p>
        </div>

        <div className={styles.contactLinks}>
          <a href="https://github.com/diosDeNada" target="_blank" rel="noreferrer"><img src={github} alt="GitHub logo"
            className={styles.githubImg} /></a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ariegonzaguer@gmail.com" target="_blank" rel="noreferrer"><img
            src={gmail} alt="Gmail logo" className={styles.gmailImg} /></a>

          <a href="https://www.linkedin.com/in/ariel-gonzales-ag%C3%BCero-959293276/" target="_blank" rel="noreferrer"><img
            src={linkedin} alt="Linkedin logo" className={styles.linkedinImg} /></a>
        </div>
      </section>
    </>
  )
}