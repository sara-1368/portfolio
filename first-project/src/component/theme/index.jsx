import React, { useState,useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import SetTheme from "../../helper/theme";
import './style.scss';


const Theme = () => {
    const colorArray = [
        {
            id: "yellow",
            bgColor: "#ffdd40",
        },

        {
            id: "red",
            bgColor: "#e82a2a",
        },
        {
            id: "green",
            bgColor: "#6ac045",
        },
        {
            id: "blue",
            bgColor: "#5078ff",
        },
    ]
    const [currentTheme, setTheme] = useState("yellow")
    const [toggle, setToggle] = useState(false)
    
    const setThemeHandler = (currentId) => {
        setTheme(currentId)
        setToggle(false)
    }

useEffect(()=>{
    SetTheme(currentTheme)
},[currentTheme])

    return (
        <div className={`Theme__wrapper ${toggle ? 'active' : ''}`}>
            <div className="Theme__wrapper__icon" >
                <IoSettingsOutline size={50} onClick={()=>setToggle(!toggle)} />
            </div>

            <div className="Theme__wrapper__menu">
                <h4>choose theme!</h4>
                <ul>
                    {colorArray.map((item, key) => (
                        <li onClick={() => setThemeHandler(item.id)} key={key} style={{ background: item.bgColor }}></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Theme;