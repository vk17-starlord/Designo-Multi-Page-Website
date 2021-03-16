import React from 'react'
import logo from './assets/shared/desktop/logo-dark.png'
import {
 
 Link
  
  } from "react-router-dom";
function Navbar() {
    return (
<div className="navbar row">
<div className="col-sm-8">
<Link to='/'><img alt="logo" src={logo}></img></Link>
</div>

<div className="col-sm-4 links">
<Link to="/Company"><span>OUR COMPANY</span> </Link>

<Link to="/Location"><span>Location</span> </Link>
<Link to="/Contact"><span>contact</span> </Link>
</div>

</div>
    )
}

export default Navbar
