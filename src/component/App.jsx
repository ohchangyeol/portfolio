import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import MainPage from "./MainPage.jsx";

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
    </>

  );
}

export default App;
