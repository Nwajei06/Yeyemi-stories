import React from 'react'
import './Style.css'
import img1 from "../../public/images/atease.jpeg"
import img2 from "../../public/images/fallapart.jpeg"
import img3 from "../../public/images/freshwater.jpeg"
import img4 from "../../public/images/godchild.jpeg"
import img5 from "../../public/images/serialk.jpeg"


function Topchoice() {
    const images = [ img1, img2, img3, img4 , img5]
  return (
    <div>
        <h3>Readers Top Choice</h3>
        <div className="books"></div>
        <div className="top-choice-img-container">
            {images.map((image, index) =>(
                <img  className='top-choice-images' key={index} src={image} />
            ))}
        </div>
    </div>
  )
}

export default Topchoice