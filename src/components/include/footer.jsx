import React from 'react'
import './../include/footer';
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <div className='row'>
      <div className="col-lg-6 col-md-6 col-sm-12 footermenu">
        <ul>
            <li><h4>Menu</h4></li>
            <li>
            <NavLink exact to="/" activeClassName="active" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/test" activeClassName="active" >
              Test
            </NavLink>
          </li>
          <li>
            <NavLink to="/Results" activeClassName="active" >
              Results
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        logo
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <p className='text-center'>All right reserved 2023</p>
      </div>
    </div>
  )
}

export default Footer
