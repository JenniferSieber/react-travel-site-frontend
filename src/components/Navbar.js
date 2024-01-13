import React from 'react'
import logo from '../images/travel-logo-lt.png'

function Navbar() {
 
  return (
    <nav className="shadow">
      <img src={logo} alt="Experiences Logo" className="logo" />
      <p className="nav--blurb">This beautiful planet -well travelled- will expand your heart and mind.</p>
    </nav>
  )
}

export default Navbar
