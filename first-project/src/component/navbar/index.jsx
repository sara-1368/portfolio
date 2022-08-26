import React from "react"
import { Link } from "react-router-dom";
import { NavList } from "./config";
import {FaReact,FaBars} from "react-icons/fa";
import {BiX} from "react-icons/bi";
import "./style.scss";
import { useState } from "react";

const Navbar = () => {
    const [click,setClick]=useState(false)
    return (
        <div className="App">
            <nav className="navbar">
                <div className="navbar__container">
                   
                        <Link className="navbar__container__logo" to={"/"}><FaReact size={30}/></Link>
                <ul className={click?"navbar__container__menu active" :"navbar__container__menu"}>
           
                    {
                       
                        NavList.map((item, key) => (
                            <li key={key} className="navbar__container__item">
                                <Link to={item.to} className="navbar__container__link">{item.label}</Link>
                            </li>

                        )

                        )

                    }

                </ul>
                <div className="navbar__icon" onClick={()=>setClick(!click)}>{click?<BiX size={50}/>:<FaBars size={30}/>}</div>   

                </div>
           
            </nav>

        </div>
    )
}
export default Navbar;
