import React from 'react'
import "./styles.css"
import logo from '../profileimage.jpg'

const Photo = () => {
  return (
    <div className="photo">
        <img src={logo} alt="A photo of me" />
    </div>
  )
}

export default Photo