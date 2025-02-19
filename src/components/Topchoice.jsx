import React from 'react'
import './Style.css'
import img1 from "../../public/images//godchild.jpeg"
import img2 from "../../public/images/fallapart.jpeg"
import img3 from "../../public/images/freshwater.jpeg"
import img4 from "../../public/images/serialk.jpeg"
import img5 from "../../public/images/atease.jpeg"


function Topchoice() {
    const images = [ img1, img2, img3, img4 , img5]
    // const book_names = ["God Child", "Things fall apart","Freshwater","My sister is a seral killer","No longer aat  ease"]
  return (
    <div>
        <h3>Readers Top Choice</h3>
        <div className="books">
      
        <div className="top-choice-img-container">
            {images.map((image, index) =>(
                <img  className='top-choice-images' key={index} src={image} />
            ))}

</div>
            <div className='names-review'>
            <span>God Children are little broken things <br />
            <span id='fade'>By Arinze Ifeakandu</span>
            <progress value={20} max={100}></progress></span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Things fall apart <br /><br />
            <span id='fade'>By Chinua Achebe</span><br />
              <progress value={50} max={100}></progress></span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Freshwater <br /><br />
            <span id='fade'> By Akweke Emezi</span><br />
              <progress value={10} max={100}></progress></span>&nbsp;
              <span >My sister the serial killer<br /><br />
              <span id='fade'> By Oyikan Braithwiaith</span>   <br />      
              <progress value={70} max={100}></progress></span>&nbsp;&nbsp;
              <span>No longer at  ease<br /><br />
            <span id='fade'>By Chinua Achebe</span><br />
              <progress value={10} max={100}></progress></span>
      
              
              

            </div>
        </div>
    </div>
  )
}

export default Topchoice