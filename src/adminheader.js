import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const Adminheader = () =>{
    return(
        <>
<nav className="navbar navbar-expand-sm navbar-info bg-warning ">
  <div className="container-fluid">
    <a className="navbar-brand text-white fs-2">  Admin Screen</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="mynavbar">
      <ul className="navbar-nav">
        <li className="nav-item fs-4">
          <Link className="nav-links me-5" to="/Createcompany"> Create company</Link>
        </li>
        <li className="nav-item fs-4">
          <Link className="nav-links me-5" to="/companylist"> Company Listing</Link>
        </li>  
       
     
        <li className="nav-item fs-4">
            <a className="nav-links">
              
                Welcome - { localStorage.getItem("vendorname") }
                <button className='btn btn-danger' onClick={logout}>Logout</button>
           </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br/>
        </>
    )
}

export default Adminheader;

const logout = () =>{
  localStorage.clear();
  window.location.href="";
  window.location.reload();
}
