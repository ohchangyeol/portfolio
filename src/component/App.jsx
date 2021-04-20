import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import MainPage from "./MainPage.jsx";
import About from "./About.jsx";
import "../css/common.css"

const App = ()=> {
  const [reSizeWidth, setWidth] = useState(window.innerWidth);
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      setWidth(window.innerWidth)
    })
  },[])
  return (
    <>
      < Header state={reSizeWidth}/>
      < MainPage state={reSizeWidth}/>
      < About state={reSizeWidth}/>
    </>

  );
}

export default App;
