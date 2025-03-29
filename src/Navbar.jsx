import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<>
<div className="container-fluid bg-warning ">
    <div className="container ">
        <div className="row d-flex">
            <div className="col-md-2"></div>
            <div className="col-md-6"></div>
            <div className="col-md-4">
            <p >long established fact that a reader will be</p>
            </div>
        </div>
    </div>
</div>



<nav className="navbar navbar-expand-lg navbar-light bg-white pe-5 py-4 ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'><img src="logo.jpg" alt="" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link mx-3" aria-current="page" to='/'>HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-3" aria-current="page"  to='/about'>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-3" aria-current="page"  to='/product'>PRODUCT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-3" aria-current="page"  to='/blog'>BLOG</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-3" aria-current="page"  to='/contact'>CONTACT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-3" aria-current="page"  to='/signup'>SIGNUP</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-5 " aria-current="page"  to='/login'><p className='btn btn-sm btn-warning px-4 py-1'>Login</p></NavLink>
        </li>
         
        
      </ul>
      
    </div>
  </div>
</nav>


</>


)
}

export default Navbar
