import React from "react";
import {AiFillProject} from "react-icons/ai";
import Header  from "../../component/headerContent";
const Portfolio = () => {
    return (
        <div className="Portfolio" id="Portfolio">
           
           <Header headerText="My Portfolio" Icon={<AiFillProject size={40}/>}/>
        </div>
    )
}
export default Portfolio;