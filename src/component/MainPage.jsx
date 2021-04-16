import React from "react";

import QuotationMark from "../img/main/mark.svg";
import "../css/mainPage.css"
import MainDesktop from "./MainDesktop.jsx"
import MainTablet from "./MainTablet.jsx"
import MainMobile from "./MainMobile.jsx"

const MainPage = (reSizeWidth)=> {
  return (
    <div className="main_page">
        <div className="keyword_is">
            <span>
                My keyword is ...
            </span>
        </div>
        <div className="quotation_mark">
            <img src={QuotationMark} />
        </div>
        <div className="keyword_box">
            {reSizeWidth.state > 1279 ? <MainDesktop />: <></> }
            {reSizeWidth.state >= 768 && reSizeWidth.state <= 1279 ? <MainTablet /> : <></> }
            {reSizeWidth.state < 768 ? <MainMobile />: <></> }
            
        </div>
    </div>
    
  );
}

export default MainPage;
