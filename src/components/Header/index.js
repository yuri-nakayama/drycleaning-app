import React from 'react'
import './styles.css'

const Header = () => {
  return (
      <div class="header flex-row">
        <div className="brand">
          <h1>Nicee</h1>
        </div>
        <div class="nav flex-row">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Prices</a>
        </div>
      </div>
  )
}

export default Header
