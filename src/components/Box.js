import React from 'react'

import '../css/Box.css'

function Box({ img, location, distance }) {
  return (
    <div className='box'>
      <div className='left-box'>
        <img src={img} />
      </div>
      <div className='right-box'>
        <h2> {location} </h2>
        <h3> {distance} </h3>
      </div>

    </div>
  )
}

export default Box