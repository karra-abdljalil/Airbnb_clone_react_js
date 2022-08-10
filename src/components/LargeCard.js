import React from 'react'
import '../css/LargeCard.css'
function LargeCard({img,title,discption,buttonText}) {
  return (
    <section className='largCard'>
        
        <div>
            <h2> {title}</h2>
            <p> {discption}</p>
            <button> {buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard