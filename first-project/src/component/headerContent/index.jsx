import React from "react"
import "./style.scss"

const Header = (props) => {
    const { headerText, Icon } = props;
    return (
        <div className="Wrraper" style={{ color: "white" }}>{props.name}
            <h2>{headerText}</h2>
            <span>{Icon}</span>
        </div>
    )
}
export default Header;