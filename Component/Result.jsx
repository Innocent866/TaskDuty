import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../src/assets/arrow.jpg'
import '../Styles/Main.css'

const Result = () => {
    const [task, setTask] = useState ('')
    const [descrip, setDescrip] = useState('')
    const [tags, setTags] = useState('')

    function folder (e) {
        e.preventDefault()
        console.log('submitted');
        console.log(task);
        console.log(descrip);
        console.log(tags);
    }

  return (
    <div className='container'>
        <Link to='/Body' className='bil my-5 d-flex align-items-center text-dark text-decoration-none'><img src={arrow} alt="" className='h'/><h2> Edit Task </h2></Link>

        <form onSubmit={folder}>
            <div className='div1'>
                <label className='lab'>Task Title</label><br />
                <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} className='w-100 p-3' placeholder='Eg. Project Defence and Assignment...'/>
            </div>

            <div className='div'>
                <label className='label'>Description</label>
                <textarea value={descrip} onChange={(e)=>setDescrip(e.target.value)} cols="30" rows="10" className='w-100 p-3' placeholder='Briefly describe your task'></textarea>
            </div>

            <div className='di'>
                <label className='lab2'>Tags</label><br />
                <select value={tags} onChange={(e)=>setTags(e.target.value)} id="cars" name="cars" className='w-100 select p-3'>
                <option value="Urgent">Urgent</option>
                <option value="Important">Important</option>
                </select>
            </div>
            <Link to='/Body'><button className='btt text-center w-100'>Done</button></Link>
        </form>
        
        <Link className='acro mb-5 text-center'><p>Back to Top</p></Link>    
        </div>
  )
}

export default Result