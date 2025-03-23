// import './App.css'
import Homepage from './pages/Homepage'
import Gca from './pages/Gca'
import { Route, Routes } from 'react-router-dom'
import Child from './pages/Child'
import Apart from './pages/Apart'
import Fresh from './pages/Fresh' 
import Sister from './pages/Sister'
import Longer from './pages/Longer'
import Half from './pages/Half'
import Bookone from './pages/Bookone'
import Bookfour from './pages/Bookfour'
import Bookfive from './pages/Bookfive'
import Booksix from './pages/Booksix'


function App() {

  return (
    
      <div>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Gca' element={<Gca />} />
          <Route path='/child' element={<Child/>}/>
          <Route path='/apart' element={<Apart/>}/>
          <Route path='/fresh' element={<Fresh/>}/>
          <Route path='/sister' element={<Sister/>}/>
          <Route path='/longer' element={<Longer/>}/>
          <Route path='/half' element={<Half/>}/>
          <Route path='/Book1' element={<Bookone/>}/>
          <Route path='/Book4' element={<Bookfour/>}/>
          <Route path='/Book5' element={<Bookfive/>}/>
          <Route path='/Book6' element={<Booksix/>}/>


        </Routes>

      </div>
     
  )
}

export default App
