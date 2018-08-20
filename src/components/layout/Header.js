import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Sygnet from '../../assets/sygnet.png';

const Header = props => {
  const { branding } = props;
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-holder d-flex align-items-center justify-content-between">
            <div className="navbar-header">
              <a className="navbar-brand d-none d-sm-inline-block">
                <div className="brand-text d-none d-lg-inline-block">
                  <img
                    src={Logo}
                    style={{
                      height: '30px',
                      width: 200,
                      position: 'relative'
                    }}
                    alt="DB logo"
                  />
                </div>
                <div className="brand-text d-none d-sm-inline-block d-lg-none">
                  <img
                    src={Sygnet}
                    style={{
                      height: '30px',
                      width: 200,
                      position: 'relative'
                    }}
                    alt="DB logo"
                  />
                </div>
              </a>
              <a id="toggle-btn" href="/" className="menu-btn active">
                <span />
                <span />
                <span />
              </a>
            </div>
            <div>
              <a
                href="/"
                className="navbar-brand"
                style={{ position: 'relative' }}
              >
                {branding}
              </a>
            </div>
            <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
              <li className="nav-item d-flex align-items-center">
                <Link to="/" className="nav-link">
                  <i className="fas fa-user-circle fa-2x" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  branding: 'Risk Finder Data Services'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
