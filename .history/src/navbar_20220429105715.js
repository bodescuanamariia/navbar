import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} lat="logo" />
            <button className="nav-toggle">
              <FaBars />
            </button>
          </div>

          <ul className="social-icons">
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
