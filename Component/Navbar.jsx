import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../src/assets/Prof.jpg'
import tlogo from '../src/assets/Tlogo.jpg'
import '../Style/Navbar.css'

const Navbar = () => {
  return (
    <div className=' navh1 sticky-top bg-white'>
         <nav className='container d-flex justify-content-between align-items-center  py-3 w-100'>
      <div className='d-flex gap-3'>
           <Link  to='/'><img src={tlogo} alt=""/></Link>
            <Link to='/' className='h1nav'><h3>TaskDuty</h3></Link>
        </div>
        <div className='d-flex gap-lg-4 gap-2 align-items-center '>
           <Link to='/NewTask' className='pnav'> <p className='d-sm-none d-md-block'>New Task</p></Link>
            <Link to='/AllTask' className='pnav'><p>All Task</p></Link>
            <img src={profile} alt="" className='img'/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar