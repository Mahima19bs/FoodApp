import { useState } from "react";

const Header = () => {
  const [login,setLogin]=useState("Login");
  return (
    <div className="header-app">
      <div className="logo-container">
        <img className="logo" src="./food_logo.png" alt="Food Logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
        </ul>
      </div>

      <div>
        <button className="login-css" onClick={()=>{
          login=="Login" ? setLogin("Logout") : setLogin("Login");
        }}>{login}</button>
      </div>
    </div>
  );
};
export default Header;