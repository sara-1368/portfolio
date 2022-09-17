import React from "react";
import Header from "../../component/headerContent";
import {BsInfoCircleFill} from "react-icons/bs"
const About = () => {
    return (
        <div className="About" id="About">
            <Header headerText="About Me" Icon={<BsInfoCircleFill size={40}/>}/>
        </div>
    )
}
export default About;