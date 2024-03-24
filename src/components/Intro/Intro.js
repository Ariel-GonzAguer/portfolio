import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'

export default function Intro() {
  const textToShow = ["Im a Costa Rica based Front End Developer who enjoy to write code simple and clean " , "I'm also a Professional Brewer with more than 7 years of experience, in case you want a beer too "]

  return (
    <section id='Intro'>
      <h2>Who is {'{'} Arie {'}'} ?</h2>
      <p>{textToShow[0]}<FontAwesomeIcon icon={faLaptopCode}/><br /><br />
        {textToShow[1]}<FontAwesomeIcon icon={faBeerMugEmpty}/></p>
      </section>
        )
}