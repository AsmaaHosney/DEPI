import React from 'react'
import style from './Home.module.css'
import backgroundImage from '../../assets/images/bg.jpeg' // Import background image

export default function Home() {
  return (
    <>
      <div
        className={style.homeBackground}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* ...existing code... */}
      </div>
    </>
  )
}
