import React from "react";
import logo from "../img/logo/ch_black.png";
import Clock from "./Clock.js";
import Nav from "./Nav.jsx"
import Mod from "./Mod.jsx"
import Hamburger from "./Hamburger.js"
import "../css/header.css"



const Header = (reSizeWidth) => {
  return (
    <>
      <header>
        <div className="header_logo">
          <img src={logo}/>
        </div>
        {reSizeWidth.state >= 768 ? <Nav state={reSizeWidth}/>: <></> }
        {reSizeWidth.state < 768 ? <Hamburger />: <></> }
        
        <div className="clock_mod">
          <div className="clock">
            <Clock />
          </div>
          {reSizeWidth.state >= 768 ? <Mod/> : <></> }
        </div>
      </header>
      {reSizeWidth.state < 768 ? <Nav state={reSizeWidth}/>: <></> }

    </>
  );
}

export default Header;