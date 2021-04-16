import React, { useEffect, useState } from "react";

const Clock = ()=> {
    const [date,setdate] = useState(new Date());
    const time = () => {
        setdate (new Date());
    }
    useEffect(()=>{
        const setTime = setInterval(time,1000);
        return () => {clearInterval(setTime)}
    },[])
    
  return (
    // {hours  < 10 ? `0${hours}` : hours}:${minutes  < 10 ? `0${minutes}` : minutes}
    <span>
        {date.getHours() < 10 ? `0${date.getHours()}`: date.getHours() } : {date.getMinutes() < 10 ? `0${date.getMinutes()}`:date.getMinutes()}
    </span>
  );
}

export default Clock;
