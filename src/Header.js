import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/" style={{color:"white",marginLeft: "20px"}} ><b>Home</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signIn" style={{color:"white",marginLeft: "20px"}} ><b>SignIn</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/location" style={{color:"white",marginLeft: "20px"}} ><b>Root Locations</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/support" style={{color:"white",marginLeft: "20px"}} ><b>Support</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/support" style={{color:"white",marginLeft: "20px"}} ><b>Track Us</b></a>
      </li>
    </ul>
    </div>
    </nav>
  )
}

export default Header