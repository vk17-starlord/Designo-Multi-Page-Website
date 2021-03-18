import {BsChevronRight } from "react-icons/bs";
import '../App.css'
import {
 Link} from "react-router-dom";
import React from 'react';



function Webblock({className,heading,link}) {
  

    return (
        <div className={`i-card ${className}`}>
        <div className="bg">
        <h4 id="i-heading">{heading}</h4>
    <Link to={link}><span>View Projects <BsChevronRight/></span></Link>
        </div>
        </div>
    )
}

export default Webblock
