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
          <div className="links-container show-container">
            <ul className="links">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <a href="#">products</a>
              </li>
            </ul>
          </div>
          <ul className="social-icons"></ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
