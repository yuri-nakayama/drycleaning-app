import React, {useEffect} from 'react'
import './styles.css'

import { Link, useLocation } from 'react-router-dom'

const Header = () => {

  return (
      <div class="header flex-row">
        <div className="brand">
          <h1>Nicee</h1>
        </div>
        <div class="nav flex-row">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <a href="#">Prices</a>
        </div>
      </div>
  )
}

export default Header
