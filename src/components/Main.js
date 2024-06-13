import React from "react"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";



function Main() {
    return(
        <div className="main--container">
            <h2 className="main-heading"> UCHE JENNIFER</h2>
            <h3 className="main-subheading">Front-end Engineer</h3>
            <div className="main-button-container">
            <button className="main-button"><FaMessage />Contact</button>
            <button className="main-button-two"><FaSquareXTwitter />Follow</button>
            </div>
           
        </div>
    )
    
}










export default Main;