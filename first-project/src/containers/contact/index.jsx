import React from "react";
import {RiContactsFill} from "react-icons/ri";
import Header from "../../component/headerContent";
const Contact = () => {
    return (
        <div className="Contact" id="Contact">
             <Header headerText="Contact Me" Icon={<RiContactsFill size={40}/>}/>
        </div>
    )
}
export default Contact;