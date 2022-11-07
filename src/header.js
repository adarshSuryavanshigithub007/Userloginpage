import React from 'react'
import {Link} from 'react-router-dom'

const Header=()=> {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand fs-3" href="#">Noraml Screen</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       <Link className="nav-link fs-3 me-5" to="/Companyinfo">Companyinfo</Link>
        <Link className="nav-link" to="/Signin"> <button className='btn btn-danger'>Login</button></Link>
        <Link className="nav-link" to="/Signup"><button className='btn btn-warning'>Ragister</button></Link>
     
      </div>
    </div>
  </div>
</nav>
   </>
  )
}

export default Header