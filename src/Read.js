import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios.get('https://63bbb2c9cf99234bfa615a2e.mockapi.io/crud')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      });
  }

  function handledelete(id) {
    axios.delete(`https://63bbb2c9cf99234bfa615a2e.mockapi.io/crud/${id}`).then(() => {
      getData();
    })
  }

  const setToLocalStorage =(id,email,name)=>
  {
        localStorage.setItem("id",id);
        localStorage.setItem("email",email);
        localStorage.setItem("name",name);


  }
  // const storage = (id, name, email) => {
  //   localStorage.setItem("id", id);
  //   localStorage.setItem("name", name);
  //   localStorage.setItem("email", email);
  // };

  useEffect(() => {
    getData();

  }, [])

  return (
    <>
      <table class="table" style={{ marginTop: "100px", width: "60%", marginLeft: "250px" }}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {
          data.map((eachData) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.email}</td>
                    <td>{eachData.name}</td>
                    <td>
                      <Link to='/update'>
                        <button className='btn btn-warning' onClick={()=>setToLocalStorage(eachData.id,eachData.email,eachData.name)}>Edit</button>&nbsp;&nbsp;
                      </Link>
                      <button className='btn btn-danger' onClick={() => handledelete(eachData.id)}>Delete</button></td>
                  </tr>

                </tbody>
              </>
            )
          }
          )

        }
      </table>
    </>
  )
}

export default Read
