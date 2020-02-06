import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

import './styles.css';
import data from './data'

const Landing = () => {
  const [active, setActive] = useState(data[0])
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (isPlaying) {
      const timeout = setTimeout(() => {
        handleNext()
      }, 5000)

      return () => {
        clearTimeout(timeout)
      }
    }
  })

  const handlePrev = () => {
    const currentIndex = data.indexOf(active)
    const lastIndex = data.length - 1

    if (currentIndex === 0) {
      setActive(data[lastIndex])
    } else {
      setActive(data[currentIndex - 1])
    }
  }

  const handleNext = () => {
    const currentIndex = data.indexOf(active)
    const lastIndex = data.length - 1

    if (currentIndex === lastIndex) {
      setActive(data[0])
    } else {
      setActive(data[currentIndex + 1])
    }
  }

  const variants = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    },
    inactive: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 1
      }
    }
  }

  const navVariants = {
    full: {
      x: 0,
      opacity: 1,
      background: "black",
      transition: {
        duration: 1
      }
    },
    empty: {
      x: 0,
      opacity: 1,
      background: 'white',
      transition: {
        duration: 1
      }
    }
  }

  const isActive = (dataItem) => {
    return active === dataItem ? "active" : "inactive"
  }

  return (
      <motion.div
        className="greeting"
        variants={variants}
        animate={active}
      >
        {
          data.map(item => {
            return (
              <React.Fragment>
                <motion.img
                  className="carousel-img"
                  src={item.image}
                  alt={item.name}
                  variants={variants}
                  animate={isActive(item)}
                />
                <motion.div
                  className="carousel-text"
                  variants={variants}
                  animate={isActive(item)}
                >
                  <motion.h2
                    className="carousel-title"
                    variants={variants}
                    animate={isActive(item)}
                  >
                    {item.name}
                  </motion.h2>
                  <motion.h3
                    className="carousel-description"
                    variants={variants}
                    animate={isActive(item)}
                  >
                    {item.description}
                  </motion.h3>
                </motion.div>
              </React.Fragment>
            )
          })
        }
        <div className="nav-container">
          {
            data.map(item => {
              return (
                <motion.div
                  className="nav-circle"
                  variants={navVariants}
                  animate={active === item ? "full" : "empty"}
                  onClick={() => setActive(item)}
                >
                </motion.div>
              )
            })
          }
        </div>
      </motion.div>
  )
}

export default Landing
