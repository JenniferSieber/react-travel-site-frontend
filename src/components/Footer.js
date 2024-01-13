import React from 'react'
import logo from '../images/travel-logo-lt.png'

function Footer() {
  return (
    <footer>
      <div className="footer--image-container">
      <img src={logo} alt="Experiences Logo" className="logo-small" />
      </div>
      <div className="footer--details">
        <h3>
          <a href="https://github.com/JenniferSieber" target="_blank" rel="noreferrer" >Jennifer Sieber FS Developer</a>
          </h3>
        <p className="footer--copy">Created: &copy;2024 All Rights Reserved</p>
      </div>
      
    </footer>
  )
}

export default Footer
