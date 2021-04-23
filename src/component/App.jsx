import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import MainPage from "./main-page/MainPage.jsx";
import About from "./About.jsx";
import "../css/common.css"
import Skills from "./skill-page/Skills";
import dummy from "../data/contentData.json"

const App = ()=> {
  const [reSizeWidth, setWidth] = useState(window.innerWidth);
  const reSizeSet = () => {
    setWidth(window.innerWidth);
  };
  
  useEffect(()=>{
    window.addEventListener("resize",reSizeSet);
    return () =>{
      window.removeEventListener("resize",reSizeSet);
    }
  },[])
  return (
    <>
      < Header state={reSizeWidth}/>
      < MainPage state={reSizeWidth}/>
      < About state={reSizeWidth}/>
      < Skills state ={dummy}/>
    </>

  );
}

export default App;
