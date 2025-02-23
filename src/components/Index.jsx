import React from 'react'
import logo from "../../public/images/logo.jpeg"
import vectorstart from "../../public/images/vectorstart.jpg"
import './Style.css'


function Index() {

 
  return (
    <div className='index-container'>
    <div className='index-logo-container'>
<img src={logo} alt="" /> <div className="words">Aunty Yeyemi Stories</div>
    </div>
    <div   className='index-content'>
   <p className='p-hi'>Hi Reader,</p>
   <div className='inpt'> 
   <input type="text" placeholder='Search'/> &nbsp;  <div className='search'>     
 <i class="fa fa-search"></i> 

   </div>
   </div>
    </div> <br />
    <br />
    <div className="vector-container">
      <div className="vector-words">"Books and Doors are the same thing. You open them, and you go through into another world"</div>
      <div className="vector"><img className='img' src={vectorstart} alt="" /></div>
    </div>
    </div>   
  )
}
export default Index 