import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';


const Create = () => {

  const[name,setName]=useState("")
  const[email,setEmail]=useState("") 

  const navigate = useNavigate();



  const handle =(e)=>{
      e.preventDefault();
      console.log("clicked")
      axios.post('https://63bbb2c9cf99234bfa615a2e.mockapi.io/crud',{
        name:name,
        email:email,
      
      })

      .then(()=>{
        navigate('/read')
      })
    
  }
  return (
    <>
   
      <form className='container mt-5 w-50'>
        <h2 style={{color:"#45496A"}}>Create</h2>
        <br/>
  <div class="form-group">
    
    <input type="email" class="form-control" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <br/>
  <div class="form-group">
   
    <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
  </div>
  <br/>
  <button type="submit" class="btn" style={{backgroundColor:"#45496A",color:"#ffffff"}} onClick={handle}>Create</button>
</form>


    </>
  )
}

export default Create
