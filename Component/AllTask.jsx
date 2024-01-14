import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Style/AllTask.css'
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'

const AllTask = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const { userId } = useParams()

  const getData = async ()=>{
    try{
      setLoading(true)
      const fetch = await axios.get('http://localhost:8060/api/profile')
      setData(fetch.data.user)
      console.log(fetch.data.user);
    }catch(error){
      setData(fetch.message)
      console.log();
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getData()
  },[])

  const handleDelete = async(e)=>{
    e.preventDefault()
    try{
      const data = await axios.delete(`http://localhost:8060/api/profile/${userId}`)
      console.log(data);
      window.location.reload()
  }catch(error){
      console.log(error);
  }
  };


  return (
    <div className='container'>
        <div>
       <div className='container d-flex align-items-center justify-content-between my-5'>
        <h2>My Tasks</h2>
        <Link to='/NewTask' className='text-decoration-none'><p className='para1'>+ Add New Task</p></Link>
        </div>
        {loading && <Spinner amination= 'border'/>}
        {data.map((datum)=>{
          const {_id, tag, name, title} = datum
          return(
            <div key={_id} className='my-5 p-3 border border-1 border-dark rounded-5'>
             <div className='d-flex  justify-content-between align-items-center border-bottom border-bottom-1 border-dark'>
             <h2>{tag}</h2>
             <div className='d-flex gap-2'>
            <Link to={`/EditTask/${_id}`}> <button className='bt'>Edit</button></Link>
             <button className='tn' onClick={handleDelete}>Delete</button>
             </div>
             </div>
              <h1>{name}</h1>
              <p>{title}</p>
            </div>
          )
        })}
      <div className='text-center'>
      <Link className='acro '><p>Back to Top</p></Link>
      </div>

    </div>
    </div>
    )}


export default AllTask;

