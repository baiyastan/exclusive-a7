import React from 'react'
import "./Card.css"
import havic from "../../assets/image/havic.png"

function Card() {
  return (
    <div className='card'>
      <div className='card-image'>
        <img className='card-item-image' src={havic} alt="" />
        <div className='discount'>-40%</div>
        <div className='icons'>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <button className='card-btn'>Add To Cart</button>
      </div>
      <div className='card-content'>
        <h3>title</h3>
        <div className='prices'>
          <p className='new-price'></p>
          <p className='olf-price'></p>
        </div>
        <div className='rating'></div>
      </div>
    </div>
  )
}

export default Card
