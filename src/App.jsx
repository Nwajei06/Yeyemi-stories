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




        </Routes>

      </div>
     
  )
}

export default App
