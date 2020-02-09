import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Notification = ({notice, link}) => {
  return (
    <Link className="notification" to={link}>
      {notice}
    </Link>
  )
}

export default Notification
