import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function LogOut() {
  const navigate = useNavigate();
  const param=useParams();
  const {name}=param;
  console.log(name);
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
      };
  return (
    <div>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">hey {name}</h1>
      <button onClick={handleLogout} className="p-2 text-white bg-red-500 rounded">Logout</button>
    </div>
    </div>
  )
}

export default LogOut
