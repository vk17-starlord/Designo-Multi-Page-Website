import React ,{useState}from 'react'
import logo from './assets/shared/desktop/logo-dark.png'
import { HiMenuAlt3 } from "react-icons/hi";
import {
 
 Link
  
  } from "react-router-dom";



function Navbar() {
  
    const [menu, setmenu] = useState('close');

 
    const menuToggler = () => {
        menu === 'open' ? setmenu('close') : setmenu('open')
       console.log(menu)
      }
    

  return (
<div className="navbar row">
<div className="col-sm-6">
<Link to='/'><img alt="logo" src={logo}></img></Link>
</div>

<div className="col-sm-4 mob-links" >

<button className="menu" onClick={menuToggler}><HiMenuAlt3 /></button>
</div>

{menu==='open'? <div className="col-sm-12 mob-links menu-block ">
<Link to="/Company"><span>OUR COMPANY</span> </Link>

<Link to="/Location"><span>Location</span> </Link>
<Link to="/Contact"><span>contact</span> </Link>
</div>
:<></>
}


<div className="col-sm-4 links">
<Link to="/Company"><span>OUR COMPANY</span> </Link>

<Link to="/Location"><span>Location</span> </Link>
<Link to="/Contact"><span>contact</span> </Link>



</div>


</div>
    )
}

export default Navbar
