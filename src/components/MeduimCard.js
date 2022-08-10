import React from 'react' 
import '../css/MeduimCard.css'
 
function MeduimCard({ img, title }) {
    return (
        <div className="inner-carousel">
            <div className='meduimcard'>
                <img src={img} />
            </div>
            <h3>{title}</h3>
        </div>
    ) 
}

export default MeduimCard