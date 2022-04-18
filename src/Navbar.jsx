import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = (props) => {
  return (
    <>
      <div className="container-fluid nav_bg mt-3 ">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark ">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <img src={"Logo.png"} className="logo" alt="logo" />
                </Link>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mt-3 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        aria-current="page"
                        to="/explore"
                      >
                        Explore
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About Us
                      </Link>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <div className="dropdown border-none ">
                          <button
                            className="btn text-white border-none dropdown-toggle dropmenu"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Cities
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Mumbai
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Banglore
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Hyderabad
                              </a>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <button type="button" className="btn btn-manual text-white">
                    Call
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
