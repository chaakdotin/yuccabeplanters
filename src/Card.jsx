import React from 'react'
import './Card.css'
import { a } from 'framer-motion/client'
export default function Card({ text, img, link }) {
  return (
   
      <div className="card">
        <a href={link} className='text-dark'>
          <div className="text">{text}</div>
          <div className="image-container">
            <img src={img} alt={text} />
          </div>
        </a>
      </div>
   
  )
}