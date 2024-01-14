import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../src/assets/arrow.jpg'
import '../Style/NewTask.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';


const NewTask = () => {
    const [title, setTitle] = useState ('')
    const [name, setName] = useState('')
    const [tag, setTag] = useState('')
    const navigate = useNavigate('')

    async function handleSubmit (e) {
        e.preventDefault()
        try{
            const data = await axios.post('http://localhost:8060/api/profile',{
                name,
                tag,
                title
            })
            console.log(data);
      if(data.status === 201){
        // alert(data.statusText)
        toast.success(data.statusText);
        
        navigate('/AllTask')
        console.log(data);
    }
}catch(error){
    console.log(error);
    // alert(error.response.statusText)
    toast.error(error.response.statusText);
    }
         
    }

  return (
    <div className='container'>
        <Link to='/AllTask' className='bil my-5 d-flex align-items-center text-dark text-decoration-none'><img src={arrow} alt="" className='h'/><h2> New Task </h2></Link>

        <form >
            <div className='div1'>
                <label className='lab'>Name</label><br />
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='w-100 p-3' placeholder='Eg. Project Defence and Assignment...'/>
            </div>

            <div className='div'>
                <label className='label'>Task Title</label>
                <textarea value={title} onChange={(e)=>setTitle(e.target.value)} cols="30" rows="10" className='w-100 p-3' placeholder='Briefly describe your task'></textarea>
            </div>

            <div className='di'>
                <label className='lab2'>Tags</label><br />
                <select value={tag} onChange={(e)=>setTag(e.target.value)} id="cars" name="cars" className='w-100 select p-3'>
                <option>---</option>
                <option value="Urgent">Urgent</option>
                <option value="Important" className='text-danger'>Important</option>
                </select>
            </div>
            <button onClick={handleSubmit} className='btt my-5 py-3 rounded-1 border border-none text-white text-center w-100'>Done</button>
            
                <div className='text-center'>
                <Link className='acro'><p>Back to Top</p></Link>  
                </div>  
            
        </form>
        
      
        </div>
  )
}

export default NewTask;