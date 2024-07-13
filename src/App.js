
import React from 'react';
import {Routes, Route, BrowserRouter,} from 'react-router-dom';
import './Tailwind.css';
import Login from './componend/Login';
import LogOut from './componend/LogOut';
import Registration from './componend/Registration';


function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const login = () => {
  //   setIsAuthenticated(true);
  // };

  // const logout = () => {
  //   setIsAuthenticated(false);
  // };
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Registration/>}/>
    <Route path="/login" element={<Login  />}/>
      <Route path="/logout/:name" element= { <LogOut  />}/>
       
      
      </Routes>
  </BrowserRouter>
  );
}

export default App;
