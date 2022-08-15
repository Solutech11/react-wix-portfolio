import React from "react";
import "./nav.css";
import { Outlet, Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  return (
    <header className="header">
      <div className="up">
        <div className="middle">
          <img src={require("../img/icon.png")} alt="" />
          <div>
            <h3 className="upp-middle">Chery Jones</h3>
            <h3 className="dwn-middle">Digital Media Expert</h3>
          </div>
        </div>
        <button style={{ height: 35 }}>
          <GiHamburgerMenu className="w-100 h-100" height="100%" />
        </button>
      </div>

      <div className="down">
        <Link to="/">Home</Link>

        <div>
          <a href="">
            <FaFacebookF color="black" />
          </a>
          <a href="">
            <BsTwitter color="black" />
          </a>
          <a href="">
            <BsYoutube color="black" />
          </a>
        </div>
      </div>
      {/* navbar
       */}
      <Outlet />
    </header>
  );
}

export default Navbar;
