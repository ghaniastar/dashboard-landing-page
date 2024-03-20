import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navItems = [
    { id: 1, title: 'Manage'},
    { id: 2, title: 'Market'},
    { id: 3, title: 'Measure'},
    { id: 4, title: 'Community'},
    { id: 5, title: 'Support'}
  ]
  
  return (
    <div>
        
<nav class="navbar navbar-expand-lg fixed-top bg-light ">
  <div class="container-fluid">
    <Link to="/"><a class="navbar-brand" href="#">Dashboard</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class=" d-flex align-items-center collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
          <a class="nav-link active list" aria-current="page" href="#">Manage</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active list" aria-current="page" href="#">Market</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active list" aria-current="page" href="#">Measure</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active list" aria-current="page" href="#">Community</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active list" aria-current="page" href="#">Support</a>
        </li>
        
      </ul>
      
       <Link to='/signin'> <button class=" btn-outline-success m-2 " type="submit">Sign In</button></Link>
        <button class=" btn-outline-success m-2" type="submit">Sign Up</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar