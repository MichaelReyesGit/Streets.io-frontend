import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary my-3">
        <div className="container-fluid">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              data-bs-placement="bottom-start"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Options
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to={"/"} className="dropdown-item">
                Home
              </Link>
              <Link to={"/create-fighter"} className="dropdown-item">
                Create a New Fighter!
              </Link>
              <Link to={"/fighters"} className="dropdown-item">
                Choose Your Fighter!
              </Link>
              <Link to={"/about-us"} className="dropdown-item">
                About Us
              </Link>
            </div>
          </div>
          <Link to={"/"} className="navbar-brand image">
            <img
              src="/Street_Fighter_6_logo.webp"
              alt="Logo"
              className="nav-img"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
