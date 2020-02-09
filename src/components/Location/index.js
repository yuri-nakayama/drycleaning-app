import React from 'react'
import './styles.css'

const Location = () => {
  return (
      <div class="location">
        <div class="contents-wrapper">
          <div class="content">
            <h2>Location 1</h2>
            <p>Hour : </p>
            <p>Address : </p>
            <p>Number : </p>
          </div>
          <div class="maps">
            maps
            <img src="google.maps" alt="" />
          </div>
        </div>
      </div>
  )
}

export default Location
