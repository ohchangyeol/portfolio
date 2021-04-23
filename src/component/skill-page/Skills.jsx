import React from "react";
import "../../css/skills.css"

import SkillName from "./SkillName.jsx"
import JobList from "./JobList.jsx";


const Skills = ({state})=> {
    return (
        <section className="good_skill_job">
            <div className="content_grid">
                <h3 className ="good_job">
                    <span>잘하는 일을 </span>
                    <span>소개합니다.</span>
                </h3>
                <div className="skill_list">
                    <div className="title">
                        <span>Skills</span>
                    </div>
                    <div className="skill_box">
                        <ul>
                            <SkillName state ={state}/>
                        </ul>
                    </div>
                </div>
                <div className="job_list">
                    <ul>
                        <JobList state={state}/>
                    </ul>
                </div>
            </div>
            
        </section>
  );
}

export default Skills;
