import React from 'react'
import { IoMdHeartEmpty,IoMdHeart } from "react-icons/io";
import { GiHeartNecklace } from "react-icons/gi";
import './ColorCard.css'
/* uuid =>  generar id de manera automatica */
/* Math.random() NO es muy recomendada */
const ColorCard = ({likes, colors, date}) => {
  return (
    <div className='color-card'>
        <div className='colors'>
            {
                colors.map(color => (
                    <div className="color-item" style={{backgroundColor: color}} key={color + Math.random() }></div>
                ))
                
            }
     
        </div>
        <div className='color-card-controls'>
            <button><IoMdHeartEmpty/> {likes} </button>
            
            <span>{date}</span>
        </div>
    </div>
  )
}

export default ColorCard