import React from 'react'
import  "../styles.css"
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src='https://th.bing.com/th/id/OIP.GTD_40r4dGx389taBH-zVwHaEy?w=304&h=196&c=7&r=0&o=5&pid=1.7' alt='...' className='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="right">
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blogs</a>
        </li>
      </ul>
     
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar