import React from 'react'
import './Style.css'
import img6 from "../../public/images/vivek.jpeg"
import img7 from "../../public/images/abii.jpeg"
import img1 from "../../public/images//godchild.jpeg"
import img5 from "../../public/images/atease.jpeg"
import img4 from "../../public/images/serialk.jpeg"
import img2 from "../../public/images/zikoraimage.jpeg"
import img3 from "../../public/images/lion.jpeg"
import { Link } from 'react-router-dom'

function Books() {
  return (
    <div  className='books-container'>
      <br /><br /><br />
      <h3 className='h3'>Readers Top Choice</h3>
      <div id='sec'  className="first-section">
      <div id='sec' className="book1"><Link to='/Gca'><img src={img6} alt="" />The death of vivek  <progress value={20} max={100}></progress></Link> </div>
      <div id='sec' className="book2"><Link to='half'><img src={img7} alt="" />Becoming Abigail <progress value={70} max={100}></progress></Link></div>
      <div id='sec' className="book3"><Link to='/child'><img src={img1} alt="" />God Child...<progress value={10} max={100}></progress></Link></div>
      </div><br /><br /><br /><br /><br />
      <div id='sec'  className="first-section">
      <div id='sec' className="book4"><Link to='/longer'><img src={img5} alt="" />At ease  <progress value={60} max={100}></progress> </Link></div>
      <div id='sec' className="book5"><Link to='/fresh'><img src={img2} alt="" />Zikora  <progress value={20} max={100}></progress></Link></div>
      <div id='sec' className="book6">  <Link to='/sister'><img src={img4} alt="" />My Sister...  <progress value={35} max={100}></progress> </Link></div>

      </div><br /><br /><br /><br />
      <div id='sec'  className="first-section">
      <div  className="book7"><Link to='/apart'><img src={img3} alt="" />The Lion and the  Jewel  <progress value={20} max={100}></progress></Link></div>
      </div>
<br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Books