import './App.css'
import Homepage from './pages/Homepage'
import Gca from './pages/Gca'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    
      <div>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Gca' element={<Gca />} />
        </Routes>

      </div>
     
  )
}

export default App
