import React from "react";
import background1 from "../assets/background1.png";
import "./Chillroom.css";
const Chillroom =() =>{
    return(
        <div className="Chill-bg">
            <img src={background1} className="angelo-pantazis-wcjqxzdlxca-un-icon" alt=""></img>
            <b className="chill-place">chill place</b>
            <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer" className="dear">Click here</a>
        </div>
    );
};
export default Chillroom;