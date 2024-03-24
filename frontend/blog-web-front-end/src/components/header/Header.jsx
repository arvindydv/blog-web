import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <nav>
        <div className="flex w-100 align-center space-between">
          <div className="web-log">
            <img className="w-100" src={logo} alt="logo" />
          </div>
          <div className="nav-list">
            <ul>
              <li>Home</li>
              <li>Abour</li>
              <li>Blogs</li>
              <li>Contact</li>
              <li>SignUp</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
