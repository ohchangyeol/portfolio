import React from "react";
import Mod from "./Mod.jsx"

const Nav = (reSizeWidth) => {
  return (
    <div className="nav_box">
      <nav>
          <ul>
          <li><a href="/">Main</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Project</a></li>
          <li><a href="/">Contact</a></li>
          </ul>
      </nav>
      {reSizeWidth.state.state < 768 ? <Mod />: <></> }
    </div>
  );
}

export default Nav;