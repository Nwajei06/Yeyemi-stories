import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../public/images/godchild.jpeg"
import { useState } from 'react'
import './Pages.css'

function Child() {
      const [show, setShow]=useState(true)
  
  return (
    <div>
        <Link to='/' className='link'><li class="fas fa-arrow-left"></li></Link>
    <div className="blur"> 
        
        <img className='img6'  src={img1}  />
                <div className='middle'  >
                <img src={img1} alt="" />
        
                </div>
                </div>
                <br /><br /><br /><br />

   <center><div className='vivek'>God Children are Little Broken Things<br />
  <div className='authour'>Arinze Ifeakandu </div> <br />
   </div></center>
   <div className="about">
   <h3><hr />About the book</h3>

   Old Friend, new discoveries and difficult questions await emilio as he struggles for
   inner peace and  understanding in a moral universe whose boundaries  now ...
   </div>
   <br />

{show?<center>  <Link to='/Book1' className=''><button onClick={()=>{setShow(true)}} className="all-button">Start Reading</button></Link></center>:null
}
        </div>
  )
}

export default Child