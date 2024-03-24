import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import TechnologiesContainer from './Technologies'

export default function AboutMe() {
  return (
    <section id='moreAboutMe'>
    <div>
    <h2>+ About Me</h2>
      <p>After several years as a Professional Brewer and several medals in local and international competitions, I found a new joy in programming <FontAwesomeIcon icon={faHeart} />.
        <br />
        I love to design minimalistic and clean projects, but also can make fun and neat design. I cook what You tell me!
        <br />
        I have been studying for almost half a year this new Front End Engineering career, where I have learned about
        accessibility, testing, UI & UX, React, good practices and more.
        <br />
        I can communicate in English and Español.</p>
    </div>
    <TechnologiesContainer />
      
    </section>
  )
}