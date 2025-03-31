import React from 'react'
import './Style.css'
import img1 from "../../public/images//godchild.jpeg"
import img2 from "../../public/images/lion.jpeg"
import img3 from "../../public/images/zikoraimage.jpeg"
import img4 from "../../public/images/serialk.jpeg"
import img5 from "../../public/images/atease.jpeg"
import { Link } from 'react-router-dom'


function Topchoice() {
    const images = [ img1, img2, img3, img4 , img5]
    // const book_names = ["God Child", "Things fall apart","Freshwater","My sister is a seral killer","No longer aat  ease"]
  return (
    <div>
        <h3>Readers Top Choice</h3>
        <div className="books">
      <br />
       
            <div className='names-review'>
              <div  className="tp1"> <Link className='lin' to='/Child'><img id='id1' src={img1} />  God Children ... <span className='word'>by Arinze Ifechukwu </span> <progress id='pr' value={10} max={100}></progress> </Link> </div>
              <div  className="tp1"><Link className='lin' to='/apart'><img id='id2' src={img2} />  The Lion and the Jewell <span className='word'> by Nnadi Okafor </span> <progress id='pr' value={10} max={100}></progress> </Link> </div>
              <div  className="tp1"> <Link className='lin' to='/Fresh'><img id='id3' src={img3} /> <br />Zikora <span className='word'>by Chimamanda </span> <progress id='pr' value={10} max={100}></progress> </Link>  </div>
              <div  className="tp1"> <Link className='lin' to='/Sister'><img id='id4' src={img4} />My  sister ... <span className='word'> Oyinkan Braithwaite</span> <progress id='pr' value={10} max={100}></progress> </Link>  </div>
              <div  className="tp1"> <Link className='lin' to='/Longer'><img id='id5'src={img5} /> <br />At Ease <span className='word'>by Chinua Achebe  </span> <progress id='pr' value={10} max={100}></progress></Link> </div>

            </div>
        </div>
    </div>
  )
}

export default Topchoice