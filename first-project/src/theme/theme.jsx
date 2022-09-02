import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import './style.scss'

const Theme = () => {

    const [clickTheme, setClickTheme] = useState(false)
    const activeTheme = () => {
        setClickTheme(!clickTheme)
    }
    return (
        <div className="Theme__wrapper">
            <div className="Theme__wrapper__icon" onClick={activeTheme}>
                <IoSettingsOutline size={50} />
            </div>

            <div className={clickTheme ? ' Theme__wrapper__item active' : 'Theme__wrapper__item'}>
                    <ul>
                       <li className="Theme__wrapper__item__li"></li>
                       <li></li>
                       <li></li>
                       <li></li>
                    </ul>
            </div>
        </div>
    )
}
export default Theme;