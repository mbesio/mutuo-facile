import React from 'react';
import { Link } from "react-router-dom";
import { RiHomeGearFill } from 'react-icons/ri';


var Header = () => {

  return (
    <div className="navbar-wrapper">
      <div className="navbar-left-wrapper">
        <Link
          to="/"
          className="navbar-link-styles"
          >
          <div className="navbar-homenavigation-wrapper">
            <RiHomeGearFill className="navbar-homenavigation-icon" />
            <div>Mutuo Facile</div>
          </div>
        </Link>
      </div>
      <div className="navbar-right-wrapper">
      <Link
        to="/"
        className = "navbar-link-styles"
        >Home
      </Link>
      <Link
        to="/banche"
        className = "navbar-link-styles"
        >Banche
      </Link>
      <Link
        to="/tassi"
        className = "navbar-link-styles"
        >Tassi
      </Link>
    </div>
    </div>
  )
}

export default Header;