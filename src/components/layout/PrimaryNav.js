import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PrimaryNav extends Component {
  render() {
    return (
      <div className="page-content d-flex align-items-stretch">
        <nav className="side-navbar">
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="nav-link">
                <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li className="active">
              <Link to="/" className="nav-link">
                <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li>
              <a
                href="#exampledropdownDropdown"
                aria-expanded="false"
                data-toggle="collapse"
              >
                <i className="icon-interface-windows" />
                Example dropdown
              </a>

              <ul id="collapseExample" className="collapse list-unstyled">
                <li>
                  <a href="#">Page</a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default PrimaryNav;
