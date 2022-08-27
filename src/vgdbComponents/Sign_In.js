import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { Footer } from './Footer';


export const Sign_In = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();

  // updated
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await axios.post("http://localhost:5001/api/login", {
  //     username: credentials.username,
  //     password: credentials.password
  //   }).then((response) => {
  //     const json = response.data
  //     console.log(json);
  //     if(json.status=== 'error'){
  //       alert(json.error);
  //     }
  //     else{
  //     localStorage.setItem('token', JSON.stringify(json.data));
  //     console.log(localStorage.getItem('token'));
  //     navigate("/User");
  //     }
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }

  const handleSubmit = () => {
    navigate("/User");
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  const signinStyle = {
    height: '90vh',
  }
  const borderStyle = {
    margin: '0 auto',
    height: '70vh',
    width: '40%',
    padding: '10px 10px',
    border: '2px solid black',
    borderRadius: '10px'
  }

  return (
    <>
      <Header />
      <div className='container my-5 bg-dark' style={signinStyle}>
        <form className='bg-white' style={borderStyle} onSubmit={handleSubmit}>
          <div>
            <h3 className='text-center'>Sign In</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">User Name</label>
            <input type="text" className="form-control" id="username" name="username" onChange={onChange} aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={onChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
      </div>
      <Footer />
    </>
  )
}
