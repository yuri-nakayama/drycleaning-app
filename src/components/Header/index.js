import React from 'react'
import './styles.css'

const Header = () => {
  return (
      <div class="header flex-row">
        <h1>Nicee DryCleaning!</h1>
        <div class="nav flex-row">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Prices</a>
          <div className="icon-container">
              <i class="fab fa-instagram"></i>
          </div>
        </div>
      </div>
  )
}

export default Header
