import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import img7 from "../../public/images/abii.jpeg"

function Half() {
  return (
      <div className='gca'>
      <div className="blur"> 
      <Link to='/' className='link'> <li class="fas fa-arrow-left"></li></Link>
      
          <img className='img6'  src={img7} alt="Full screen" />
          <div className='middle'  >
          <img src={img7} alt="" />
  
          </div>
  
      </div>
      <br /><br /><br /><br />
  
     <center><div className='vivek'>Becoming Abigail<br />
    <div className='authour'>Chris Abani</div> <br />
     </div></center>
     <div className="about">
     <h3><hr />About the book</h3>
  
      Ther  death of Vivek Oji transports us to the day of vivek's birth, the day his grandmother Ahunna died. It is the story of an
      overprotective mother and a distant father, and the heart-wrenching trale of o0ne family's struggle to understand their child,
      just as Vivek learn to recognize himmself.
     </div><br />
  <center> <Link to='/Book7'><button className="all-button">Start Reading</button> </Link></center>
  
  
      </div>
  )
}

export default Half