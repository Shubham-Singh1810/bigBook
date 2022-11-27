import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="navbar position-fixed navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      BigBook
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Top Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            
            <li>
              <Link className="dropdown-item" to="/nobel">
                Novel
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/comic">
                Comic
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/biography">
                Biograpy
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/litrature">
                Litrature
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/bestSeller">
                Best Seller
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://form.jotform.com/220574885377065" target="blank">
            Contact
          </a>
        </li>
      </ul>
      <form className="d-flex">
      <button className="nav-item btn btn-sm btn-outline-info">
          <Link className="nav-link" to="/login">
            Login As Admin
          </Link>
        </button>
        
      </form>
    </div>
  </div>
</nav>

  )
}
