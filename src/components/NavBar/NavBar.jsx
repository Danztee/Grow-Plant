import React from "react";

import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="./images/GrowPLANT.png" alt="" />
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ gap: "1rem" }}
          >
            <ul
              className="navbar-nav ms-auto mb-4 mb-lg-0"
              style={{ gap: "1rem" }}
              id={classes.nav}
            >
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/"
                  id={classes.active}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" id={classes.links}>
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" id={classes.links}>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" id={classes.links}>
                  Login
                </a>
              </li>
            </ul>
            <button
              className="btn btn-outline-success"
              type="submit"
              id={classes.btn}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
