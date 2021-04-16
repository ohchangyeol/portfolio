import React, {useEffect, useRef } from "react";


const Hamburger_click =(onClick) => {
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      element.current.addEventListener("click",onClick);
    };
    return () => {
      if (element.current) {
        element.current.removeEventListener("click",onClick);
      }
    }
  },[]);
  return element;
}

const Hamburger = () => {
  const change =(e)=>{
    const _nav = document.querySelectorAll(".nav_box");
    const _hamburger_box = document.querySelectorAll(".hamburger");
    _nav[0].classList.toggle('open');
    _hamburger_box[0].classList.toggle('close');
  }
  const hamburger_menu = Hamburger_click(change);
  return (
    <>
        <div className="hamburger">
            <button ref={hamburger_menu}></button>
            <span>
              <span className="one_line"></span>
              <span className="two_line"></span>
              <span className="three_line"></span>
            </span>
        </div>
    </>
  );
}

export default Hamburger;