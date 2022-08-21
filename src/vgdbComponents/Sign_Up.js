import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { Footer } from './Footer';

export const Sign_Up = () => {

  const[credentials, setCredentials] = useState({email : "", password: "", username : "", dob : ""});
  let navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   const {email, password, username, dob} = credentials;
  //   e.preventDefault();
  //   const response = await fetch("", {
  //     method : 'POST',
  //     headers:{
  //       'Content-Type' : 'application/json'
  //     },
  //     body : JSON.stringify(email, password, username, dob)
  //   });
  //   const json = await response.json();
  //   console.log(json);
  //   if(json.success){
  //     localStorage.setItem('token', json.authtoken);
  //     navigate.push("/");
  //   }
  //   else{
  //     alert("Invalid credentials")
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("", {
      username : credentials.username,
      password : credentials.password,
      email : credentials.email,
      dob : credentials.dob
    }).then((response)=>{
      const json = response.data
      console.log(json);
      // localStorage.setItem('token', json.authtoken);
      navigate("/User");
    }).catch((err) =>{
      console.log(err);
    })
}

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name] : e.target.value})
  }




    // copied codes

    const signupStyle = {
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
    <Header/>
    <div className = 'container my-5 bg-dark' style = {signupStyle}>
    <form className = 'bg-white' style = {borderStyle} onSubmit = {handleSubmit}>
      <div>
        <h3 className='text-center'>Fill the Given Information</h3>
      </div>
      <div className="mb-3">
        <label htmlFor =  "email" className = "form-label">Email address</label>
        <input type = "email" className = "form-control" id = "email" name = "email" onChange={onChange} aria-describedby="emailHelp"minLength = {8} required/>
      </div>
      <div className = "mb-3">
        <label htmlFor =  "password" className = "form-label">Password</label>
        <input type = "password" className = "form-control" id = "password" name = "password" onChange={onChange} minLength = {6} required/>
      </div>
      <div className = "mb-3">
        <label htmlFor =  "username" className = "form-label">User name</label>
        <input type = "text" className = "form-control" id = "username" name = "username" onChange={onChange} minLength = {6} required/>
      </div>
      <div className = "mb-3">
        <label htmlFor =  "dob" className = "form-label">Date of birth</label>
        <input type = "date" className = "form-control" id = "dob" name = "dob" onChange={onChange}/>
      </div>
      <button type = "submit" className = "btn btn-primary">Create Account</button>
    </form>
    </div>
    <Footer/>
    </>
  )
}