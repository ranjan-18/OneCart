import React from 'react'
import {Routes,Route} from "react-router-dom";
import Register from './pages/register'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/register' element={<Register/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
    </Routes>

    </>
  )
}

export default App