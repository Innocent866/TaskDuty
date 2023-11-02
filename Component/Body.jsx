import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Body.css'

const Body = () => {
  return (
    <div className='container'>
       <div>
       <div className='div1 my-5'>
        <h2>My Tasks</h2>
        <Link to='/Main' className='text-decoration-none'><p className='para1'>+ Add New Task</p></Link>
        </div>

        <div className='div2'>
         <div className='div3'>
         <p className='text-danger'>Urgent</p>
         <div className='div4'>
         <Link to='/Result'><button className='btn2 mx-3'> Edit</button></Link>
          <button className='btn3'>Delete</button>
         </div>
          
         </div>
         <h3>Fin Tech Website Update</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt illo itaque obcaecati laboriosam quidem et, non sed beatae dolorum veniam ea fugiat. Reiciendis iste molestiae earum consequatur quidem cumque. Tenetur error quisquam omnis, esse corrupti eaque dolores impedit molestiae ipsa et odit voluptates? Itaque nemo quia alias quam excepturi!
         </p>
         </div>
       </div>


       <div>

        <div className='div2 my-5'>
         <div className='div3'>
         <p className='text-success'>Important</p>
         <div className='div4'>
         <Link to='/Result'><button className='btn2 mx-3'> Edit</button></Link>
          <button className='btn3'>Delete</button>
         </div>
          
         </div>
         <h3>Agro Website Update</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt illo itaque obcaecati laboriosam quidem et, non sed beatae dolorum veniam ea fugiat. Reiciendis iste molestiae earum consequatur quidem cumque. Tenetur error quisquam omnis, esse corrupti eaque dolores impedit molestiae ipsa et odit voluptates? Itaque nemo quia alias quam excepturi!
         </p>
         </div>
       </div>



       <div>

        <div className='div2'>
         <div className='div3'>
         <p className='text-danger'>Urgent</p>
         <div className='div4'>
         <Link to='/Result'><button className='btn2 mx-3'> Edit</button></Link>
          <button className='btn3'>Delete</button>
         </div>
          
         </div>
         <h3>Fin Tech Website Update</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt illo itaque obcaecati laboriosam quidem et, non sed beatae dolorum veniam ea fugiat. Reiciendis iste molestiae earum consequatur quidem cumque. Tenetur error quisquam omnis, esse corrupti eaque dolores impedit molestiae ipsa et odit voluptates? Itaque nemo quia alias quam excepturi!
         </p>
         </div>
       </div>



       <div>

        <div className='div2 my-5'>
         <div className='div3'>
         <p className='text-success'>Important</p>
         <div className='div4'>
         <Link to='/Result'><button className='btn2 mx-3'> Edit</button></Link>
          <button className='btn3'>Delete</button>
         </div>
          
         </div>
         <h3>Agro Website Update</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt illo itaque obcaecati laboriosam quidem et, non sed beatae dolorum veniam ea fugiat. Reiciendis iste molestiae earum consequatur quidem cumque. Tenetur error quisquam omnis, esse corrupti eaque dolores impedit molestiae ipsa et odit voluptates? Itaque nemo quia alias quam excepturi!
         </p>
         </div>
       </div>

       <Link className='acro mb-5 text-center'><p>Back to Top</p></Link>

    </div>
  )
}

export default Body