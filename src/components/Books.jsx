import React from 'react'
import './Style.css'
import img6 from "../../public/images/vivek.jpeg"
import img7 from "../../public/images/yellow.jpeg"
import img1 from "../../public/images//godchild.jpeg"
import img5 from "../../public/images/atease.jpeg"
import img4 from "../../public/images/serialk.jpeg"
import img2 from "../../public/images/freshwater.jpeg"

import img3 from "../../public/images/fallapart.jpeg"


function Books() {
  return (
    <div  className='books-container'>
      <h3 className='h3'>Readers Top Choice</h3>
      <div id='sec'  className="first-section">
      <div id='sec' className="book1"><a href=""><img src={img6} alt="" />The death of vivek  <progress value={20} max={100}></progress></a> </div>
      <div id='sec' className="book2"><a href=""><img src={img7} alt="" />Half of a Yellow sun <progress value={70} max={100}></progress></a></div>
      <div id='sec' className="book3"><a href=""><img src={img1} alt="" />God Children... <progress value={10} max={100}></progress></a></div>
      </div><br /><br /><br /><br />
      <div id='sec'  className="first-section">
      <div id='sec' className="book4"><a href=""><img src={img5} alt="" />At ease  <progress value={50} max={100}></progress></a> </div>
      <div id='sec' className="book5"><a href=""><img src={img4} alt="" />My sister...   <progress value={10} max={100}></progress></a></div>
      <div id='sec' className="book6"><a href=""><img src={img2} alt="" />Freshwater  <progress value={70} max={100}></progress></a></div>
      </div><br /><br /><br /><br />
      <div id='sec'  className="first-section">
      <div  className="book7"><a href=""><img src={img3} alt="" />Things Fall Apart  <progress value={20} max={100}></progress></a></div>
      </div>





    </div>
  )
}

export default Books