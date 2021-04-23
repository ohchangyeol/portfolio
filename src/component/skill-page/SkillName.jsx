import React from "react";


const SkillName = ({state})=> {
    return (
        <>
            {state.skills.map((list,index)=>(
                <li key={index}>{list.name}</li>
            ))}
        </>
    
  )
}

export default SkillName;
