
import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Tailwind.css';
// import jwtDecode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';



function Login() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState();
  const [color, setColor] = useState();
  const navigate = useNavigate();
  const handleChangeName=(e)=>{
    setUsername(e.target.value);
  
  }
  const handleChangePwd=(e)=>{
  
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', { username, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // console.log(response.data.token);
         const gf=jwtDecode(response.data.token);
         console.log(gf);
         const username=gf.sub;
         console.log(username);
         setMessage("login successfully")
         setColor("blue");
         setUsername('');
         setPassword('');
         setTimeout(()=>{
          navigate(`/logout/${username}`);
         }, 3000)
      
      }
    } catch (error) {
      console.error('Login failed', error);
      setMessage("login failed")
      setColor("red");
      setUsername('');
      setPassword('');
      setTimeout(()=>{
        navigate(`/login`);
        setMessage();
       }, 3000)
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-xl font-bold " style={{color:color}}>{message?message:<span className=' text-black'> Login</span>}</h2>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={username}
            onChange={handleChangeName}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={handleChangePwd}
          />
           
        </div>
       
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded">login</button>
        <p className="mt-4">
          does'nt  have an account? <Link to="/" className="text-blue-500">Register</Link>
        </p>
     
      </form>
    </div>
      
  )
}

export default Login
