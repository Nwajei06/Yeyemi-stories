import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import img2 from "../../public/images/lion.jpeg"

function Apart() {
  return (
    <div className='gca'>
    <div className="blur"> 
    <Link to='/' className='link'> <li class="fas fa-arrow-left"></li></Link>
    
        <img className='img6'  src={img2} alt="Full screen" />
        <div className='middle'  >
        <img src={img2} alt="" />
</div>
        </div>
        <br /><br /><br /><br />

<center><div className='vivek'>Thing Fall Apart <br />
<div className='authour'>Wole Soyinka</div> <br />
</div></center>
<div className="about">
<h3><hr />About the book</h3>
Okonkwo is a wealthy and  respeected warrior of the Umuofia clan,
 a lower Nigeran tribe that is part a consortium of connected villages. Things  fall apart 
is about the struggle between change and tradition, which  is amplified by the introduction
of Christianity
</div><br />
<center><Link to='/Book2' ><button className="all-button">Start Reading</button> </Link></center>

    </div>
    

  

    
  )
}

export default Apart