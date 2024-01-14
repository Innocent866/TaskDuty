import React from 'react'
import Home from '../Component/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from '../Component/Navbar'
import NewTask from '../Component/NewTask'
import { Toaster } from 'react-hot-toast';
import AllTask from '../Component/AllTask'
import EditTask from '../Component/EditTask'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AllTask' element={<AllTask/>}/>
        <Route path='/NewTask' element={<NewTask/>}/>
        <Route path='/EditTask/:userId' element={<EditTask/>}/>
      </Routes>
      <Toaster />

    </BrowserRouter>
      
    </>
  )
}

export default App