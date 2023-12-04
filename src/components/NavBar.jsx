import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

function NavBar() {
  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary text-light">
  <div className="container-fluid bg-dark text-light">
    <a className="navbar-brand text-info fw-bold" href="#">ShreyD</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                      <a className="nav-link active text-light mx-2 eve" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active text-light mx-3 odd" aria-current="page" href="#">Education</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active text-light mx-3 eve" aria-current="page" href="#">Technologies</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active text-light mx-3 odd" aria-current="page" href="#">Projects</a>
                    </li>
                  </ul>

                </div>
                </div>
</nav>
    
  )
}

export default NavBar
