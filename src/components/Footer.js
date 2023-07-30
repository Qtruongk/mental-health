import React from "react";
import footer from "../assets/Footer.png";
import "./Footer.css";
const Footer =() =>{
    return(
        <div className="footer">
            <img src={footer} className="footer-img"></img>
            <p className="footer-p">Hotline: (+84) 0777 718 408</p>     
        </div>
    );
};
export default Footer;