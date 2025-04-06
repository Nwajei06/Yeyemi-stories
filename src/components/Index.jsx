import React from 'react'
import logo from "../../public/images/logo.jpeg"
import vectorstart from "../../public/images/vectorstart.png"
import './Style.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Index() {
  const [searchTerm,setSearchTerm ] = useState('');
  const navigate = useNavigate();
   const handleSearch =()=>{
    if (searchTerm.toLowerCase().includes('god'|| 'godchildren'|| 'god children' || 'god children are little brocken things')) {
      navigate('/child')
    } else if (searchTerm.toLowerCase().includes('lion'|| 'the'|| 'the lion' || ' the lion and the jewel')) {
      navigate('/Apart')
    }
    else if(searchTerm.toLowerCase().includes('zikora' || 'zik')){
        navigate('/Fresh')
    } else if (searchTerm.toLowerCase().includes('sister' ||'my sister' || 'mysister' || 'my sister the serial killer' )) {
      navigate('/sister')
    } else if (searchTerm.toLowerCase().includes('no longer at ease' || 'no longer' || 'ease' || 'atease')) {
      navigate('/longer')
    }else if (searchTerm.toLowerCase().includes('abigail'  )) {
      navigate('/half')
    }else if (searchTerm.toLowerCase().includes('the death of vivek oji' || 'death' )) {
      navigate('/Gca')
    }
  else{
      alert('Enter correct Keyword')
    }
   }
  
 
  return (
    <div className='index-container'>
    <div className='index-logo-container'>
<img src={logo} alt="" /> <div className="words"> &nbsp;&nbsp;&nbsp;Aunty Yeyemi Stories</div>
    </div>
    <div   className='index-content'>
   <p className='p-hi'>Hi Reader,</p>
   <div className='inpt'> 
   <input type="text" placeholder='Search'
   value={searchTerm}
   onChange={(e)=> setSearchTerm(e.target.value)}
   /> &nbsp; 
   <div onClick={handleSearch} className='search'>     
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