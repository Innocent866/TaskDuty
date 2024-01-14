import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import arrow from '../src/assets/arrow.jpg'
import '../Style/NewTask.css'
import axios from 'axios'



const EditTask = () => {
    const [title, setTitle] = useState ('')
    const [name, setName] = useState('')
    const [tag, setTag] = useState('')
    const {userId} = useParams()
    const navigate = useNavigate()
    
    const getData = async ()=>{
        try{
            const data = await axios.get(`http://localhost:8060/api/profile/${userId}`)
            console.log(data);
            setName(data.data.user.name);
            setTitle(data.data.user.title);
            setTag(data.data.user.tag);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getData();
    },[userId]);


    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const data = await axios.patch(`http://localhost:8060/api/profile/${userId}`,{
                name,
                title,
                tag
            })
            console.log(data);
            navigate('/AllTask')
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className='container'>
            <Link to='/AllTask' className='bil my-5 d-flex align-items-center text-dark text-decoration-none'><img src={arrow} alt="" className='h'/><h2> Edit Task </h2></Link>
    
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
                    <option value="Important">Important</option>
                    </select> 
                </div>
                <button 
                onClick={handleSubmit} 
                className='btt my-5 py-3 rounded-1 border border-none text-white text-center w-100'>Done</button>
            </form>
            
           <div className='text-center'>
           <Link className='acro mb-5'><p>Back to Top</p></Link>    
           </div>
            </div>
      )
}


export default EditTask;