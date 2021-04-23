import React from "react";


const JobList = ({state})=> {
    return (
        <>
            {state.goodJobList.map((list,index)=>(
                <li key ={index}className={`subject${index}`}>
                    <h5><span>{list.title}</span></h5>
                    <p>{list.summary}</p>
                </li>
            ))}
        </>
    
  )
}

export default JobList;
