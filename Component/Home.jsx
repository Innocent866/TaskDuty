import React from 'react'
import { Link } from 'react-router-dom'
import Lcon from '../src/assets/Licon.jpg'
import '../Style/Home.css'

const Home = () => {
  return (
    <div className='container'>
      <div className='d'>
        <div className='container'>
            <h1 className='h1t'>Manage Your Task On <span className='task'>TaskDuty</span></h1>
           
            <p className='para'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quas fugiat magnam odit numquam, corporis laudantium exercitationem natus illum alias totam nulla eligendi, nam cumque assumenda labore maxime cum iste modi, doloribus voluptates enim laborum? Id consectetur laudantium eveniet provident ut quisquam tempora voluptate cupiditate molestias, ab dolore aspernatur, deleniti corrupti sit dolorem! Maxime, id repellendus officiis commodi saepe veritatis!</p>
            <Link to='Body'><button className='bnt'>Go To my Task</button></Link>
        </div>

       
            <img src={Lcon} alt="" className='mw-100'/>
         
      </div>
    </div>
  )
}

export default Home