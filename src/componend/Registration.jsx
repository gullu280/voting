
import React, {  useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

function Registration() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [color, setColor] = useState();
//   const history = useHistory();
const [message, setMessage] = useState();
const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [type1, setType1] = useState("password");
   const togglePasswordVisibility = () => {
   console.log(showPassword);
    setShowPassword(!showPassword);
   
    if(!showPassword) setType1("text") ;
    if(showPassword) setType1("password") ;
  };

const handleChangeName=(e)=>{
  setUsername(e.target.value);

}
const handleChangePwd=(e)=>{

  setPassword(e.target.value);
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/auth/registers', { username, password });
    //   history.push('/login');
   
    setMessage("register successfully")
    setColor("blue");
    setUsername('');
  setPassword('');
    setTimeout(()=>{
     navigate('/login');
    }, 3000)
    } catch (error) {
      console.error('Registration failed', error);
      setMessage("user already exist")
      setColor("red");
      setUsername('');
     setPassword('');
      setTimeout(()=>{
        setMessage();
        navigate('/');
       }, 3000)
    }
   
  };
  
  return (
    <div>
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
      <h2 className="mb-4 text-xl font-bold " style={{color:color}}>{message?message:<span className=' text-black'> register</span>}</h2>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={username}
            onChange={handleChangeName}
          />
        </div>
        <div className="mb-4 w-full">
         <div className="mb-4 w-full">
  <div className="flex justify-between items-center w-full">
    <label className="mb-2">Password</label>
    <p className="cursor-pointer pt-1" onClick={togglePasswordVisibility}>
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </p>
  </div>
</div>

          
          <input
            type={type1}
            className="w-full p-2 border rounded"
            value={password}
            onChange={handleChangePwd}
          />
        </div>
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded">Register</button>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
      
    </div>
  )
}

export default Registration
