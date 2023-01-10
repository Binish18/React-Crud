
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const Update = () => {
  
  const [id,setId]=useState(0);
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");

  const navigate = useNavigate();



  useEffect(()=>{
    setId( localStorage.getItem("id"));
    setEmail( localStorage.getItem("email"));
    setName((localStorage.getItem("name")));
    
  },[]);
  const handleUpdate = (e) =>{
    e.preventDefault();
    console.log('updateddd')
    axios.put(`https://63bbb2c9cf99234bfa615a2e.mockapi.io/crud/${id}`,{
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
        <h2 style={{color:"#45496A"}}>Update</h2>
        <br/>
  <div class="form-group">
    
    <input type="email" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
    
  </div>
  <br/>
  <div class="form-group">
   
    <input type="text" class="form-control"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
  </div>
  <br/>
  <button type="submit" class="btn" style={{backgroundColor:"#45496A",color:"#ffffff"}} onClick={handleUpdate}>Update</button>
</form>

    </>
  );
};

export default Update;