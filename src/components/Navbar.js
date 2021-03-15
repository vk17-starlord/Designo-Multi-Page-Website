import React from 'react'
import logo from './assets/shared/desktop/logo-dark.png'
function Navbar() {
    return (
<div className="navbar row">
<div className="col-sm-8">
<a href="#"><img src={logo}></img></a>
</div>

<div className="col-sm-4 links">
<a href="#">our company</a>    
  
<a href="#">locations</a>    
<a href="#">contact</a>  
</div>

</div>
    )
}

export default Navbar
