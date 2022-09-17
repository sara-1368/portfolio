import React from "react"
import Header from "../../component/headerContent";
import {GiSkills} from "react-icons/gi"
const Skills = () => {
    return (
        <div className="Skill" id="Skill">
   
           <Header headerText="My Skills" Icon={<GiSkills size={40}/>}/>
        </div>
    )
}
export default Skills;