import React from 'react'
import styles from './Contact.module.css'

import github from '../MoreAboutMe/icons/github.svg'
import linkedin from '../MoreAboutMe/icons/linkedin.svg'
import gmail from '../MoreAboutMe/icons/gmail.svg'

export default function Contact() {
  return (
    <section id='contact' className={styles.contactSection}>
      <h2 className={styles.contactH2}>Contact</h2>
      <p>I would love to participate in your projects. I can design, write code, make unit tests and made UX Research.<br />
        I can work in place (depending on location) or remotely, I perform very well when working in a team as well as
        alone.<br />
        Together we can create something beautiful and fun.</p><br />
      <div id="contactLinks">
        <a href="https://github.com/diosDeNada" target="_blank" rel="noreferrer"><img src={github} alt="GitHub logo"
          className={styles.contactImg} /></a>
        <a href="mailto:ariegonzaguer@gmail.com?Subject=Interesado%20en%20trabajar%20con%20ud" target="_blank" rel="noreferrer"><img
          src={gmail} alt="Gmail logo" className={styles.contactImg} /></a>
        <a href="https://www.linkedin.com/in/ariel-gonzales-ag%C3%BCero-959293276/" target="_blank" rel="noreferrer"><img
          src={linkedin} alt="Linkedin logo" className={styles.contactImg} /></a>
      </div>
    </section>
  )
}