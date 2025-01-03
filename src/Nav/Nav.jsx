import React from 'react'
import { useState } from 'react'
import './Nav.css'

export default function Nav() {

const [isMenuOpen, setIsMenuOpen] = useState(false)

function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
    console.log('clicked')
}

  return (
    <>
        <div className='nav-container'>
            <h1 className='logo'>SNAPP</h1>
        </div>
        <div className='nav-container-mobile'>
            <h1 className='logo'>SNAPP</h1>
            <button className='nav-mobile-toggle' onClick={toggleMenu}>
                <span className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
            <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>

            </div>
        </div>
    </>
  )
}
