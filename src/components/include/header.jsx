import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="row mt-3">
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div>logo</div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end">
        <button className="btn btn-primary">login</button>
      </div>
      <div className="col-lg-12 col-sm-12 col-md-12 header">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active" className="btn btn-primary">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/test" activeClassName="active" className="btn btn-primary">
              Test
            </NavLink>
          </li>
          <li>
            <NavLink to="/Results" activeClassName="active" className="btn btn-primary">
              Results
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" className="btn btn-primary">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" className="btn btn-primary">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
