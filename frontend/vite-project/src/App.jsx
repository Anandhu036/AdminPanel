
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Add from './components/Add'

function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/'element={<Dashboard/>}></Route>
      <Route path='/add'element={<Add/>}></Route>
     </Routes>
    </>
  )
}

export default App
