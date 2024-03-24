import React from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import styles from './technologies.module.css'

import bootstrap from './icons/bootstrap.svg'
import ember from './icons/ember.svg'
import git from './icons/git.svg'
import javascript from './icons/javascript.svg'
import mocha from './icons/mocha.svg'
import mongo from './icons/mongo.svg'
import react from './icons/react.svg'
import typescript from './icons/typeScript.svg'
import vue from './icons/vue.svg'


export default function TechnologiesContainer() {

  return (
    <section>
      <Tooltip id="my-tooltip" />

      <h3 className={styles.techTitle}>Technologies I have worked with</h3>
      <ul className={styles.technologiesUl}>
        <li>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="JavaScript. Programming Language"
            data-tooltip-place="top"
            src={javascript}
            alt='JavaScript Logo'
          />
        </li>

        <li>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Mocha. Testing Framework"
            data-tooltip-place="top"
            src={mocha}
            alt='Mocha Logo'
          />
        </li>

        <li>
          <img
          className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Git. Control version System"
            data-tooltip-place="top"
            src={git}
            alt='Git Logo'
          />
        </li>
      </ul>

      <h3 className={styles.techTitle}>Technologies that I am learning</h3>
      <ul className={styles.technologiesUl}>
        <li>
          <img
          className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="React. Powerfull JavaScript Library"
            data-tooltip-place="top"
            src={react}
            alt='React Logo'
          />
        </li>

        <li>
          <img
          className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Bootstrap. CSS Framework"
            data-tooltip-place="top"
            src={bootstrap}
            alt='Boostrap Logo'
          />
        </li>

        <li>
          <img
          className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Mongo. Data Base"
            data-tooltip-place="top"
            src={mongo}
            alt='Mongo Logo'
          />
        </li>
      </ul>

      <h3 className={styles.techTitle}>Technologies I want to learn soon</h3>
      <ul className={styles.technologiesUl}>
        <li>
          <img
          className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Ember. JavaScript Framework"
            data-tooltip-place="top"
            src={ember}
            alt='Ember Logo'
          />
        </li>

        <li>
          <img
          className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Vue. JavaScript Framework"
            data-tooltip-place="top"
            src={vue}
            alt='Vue Logo'
          />
        </li>

        <li>
          <img
          className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="TypeScript. Programming language(like a Super JavaScript)"
            data-tooltip-place="top"
            src={typescript}
            alt='TypeScript Logo'
          />
        </li>
      </ul>
    </section>

  )

}


