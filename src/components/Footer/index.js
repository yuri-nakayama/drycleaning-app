import React from 'react'
import './styles.css'

const Footer = () => {

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
      <div class="footer">
        <h3 onClick={goTop}>Nicee DryCleaning!</h3>
        <p>Copyright © 2020  Nicee Dry Cleanin</p>
        <a className="icon-container" target="_blank" href='https://www.instagram.com/niceedrycleanco'>
            <i class="fab fa-instagram"></i>
        </a>
      </div>
  )
}

export default Footer
