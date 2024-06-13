import React from "react"
import profilePicture from "../images/profile-picture.jpeg"


function Header() {
    return(
        <div className="header--container">
            <img src={profilePicture} className="profile-picture"/>
        </div>
    )
    
}










export default Header;