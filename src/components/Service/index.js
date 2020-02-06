import React from 'react'
import './styles.css'
import data from "./data"

const Service = () => {

  const getFlex = (i) => {
    return i % 2 !== 0 ? 'flex-row-rev' : 'flex-row'
  }

  return (
      <div class="services">
        {
          data.map((service, i) => {
            return (
              <div className={`contents-wrapper ${getFlex(i)}`}>
                <div className="service">
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                </div>
                <img src={service.image} alt={service.name} />
              </div>
            )
          })
        }
      </div>
  )
}

export default Service
