import React from "react";

import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-3 header">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" class="nav-link active navbar-brand" aria-current="page" >Home</Link>
        </li>
       
       
        <li class="nav-item">
          <Link to="/gallery" class="nav-link navbar-brand" href="#" tabindex="-1" aria-disabled="true">Gallery</Link>
        </li>  
        <li class="nav-item">
          <Link to="/about" class="nav-link navbar-brand" href="#" tabindex="-1" aria-disabled="true">About</Link>
        </li>
          
        <li class="nav-item">
          <Link to="/Contact" class="nav-link navbar-brand" href="#" tabindex="-1" aria-disabled="true">Contact</Link>
        </li>
      </ul>
      <form class="d-flex">
        <Link class="nav-link navbar-brand" to="/login">Login</Link>
        <Link class="nav-link navbar-brand" to="/">Register</Link>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Header;