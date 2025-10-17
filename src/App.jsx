import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Profile from './component/Profile'

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/profile' element={<Profile/>} />
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
