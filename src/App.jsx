import React from 'react'
import Home from '../Component/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Body from '../Component/Body'
import Main from '../Component/Main'
import Result from '../Component/Result'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Body' element={<Body/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App