import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../public/images/godchild.jpeg"
import './Pages.css'

function Child() {
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

<center>  <Link to='/Book1' className=''><button className="all-button">Start Reading</button></Link></center>

        </div>
  )
}

export default Child