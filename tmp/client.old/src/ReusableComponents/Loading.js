import React from 'react'

import LoadingCat from '../Assets/img/LoadingCat.gif'
import LoadingDog from '../Assets/img/LoadingDog.gif'

const loadingStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  opacity: "80%"
}

const imageStyle = {
  margin: "auto"
}

export default function Loading() {
  let animal = null
  
  if (Math.floor(Math.random() * Math.floor(2))) {
    animal = LoadingCat
  } else {
    animal = LoadingDog
    imageStyle.width = "20%"
  }

  return (
    <div style={loadingStyle}>
      <img src={animal} alt="" style={imageStyle}/>
    </div>
  )

}
