import React from 'react'
import Index from '../components/Index'
import Topchoice from '../components/Topchoice'
import Books from '../components/Books'
import './Pages.css'
import '../App.css'
import '../components/Style.css'




const Homepage = () => {
  return (
    <div id='home-container'>
    <div id='home'>
        <Index/>
        <Topchoice/>
        <Books/>
        </div>
     </div>
  )
}

export default Homepage