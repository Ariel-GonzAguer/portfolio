import React from'react'
import styles from './ColorMode.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function LightMode () {
    return (
        <div className={styles.divColorMode}>
          <button className={styles.light}><FontAwesomeIcon icon={faSun} className={styles.button} /></button>
          <button className={styles.dark}><FontAwesomeIcon icon={faMoon} className={styles.button} /></button>
      </div>
    )
}