import React from 'react'
import NavBar from './NavBar'
import ColorMode from './ColorMode'

export default function Header() {
  return (
    <header>
      <div>
        <h1>Arie GonzAguer</h1>
        <p>Web Development</p>
      </div>

      <NavBar />
      <ColorMode />

    </header>

  )
}