import React from 'react'
import logo from './assets/shared/desktop/logo-dark.png'
function Navbar() {
    return (
<div className="navbar row">
<div className="col-sm-8">
<a href="https://github.com/vk17-starlord"><img alt="logo" src={logo}></img></a>
</div>

<div className="col-sm-4 links">
<a href="https://github.com/vk17-starlord">our company</a>    
  
<a href="https://github.com/vk17-starlord">locations</a>    
<a href="https://github.com/vk17-starlord">contact</a>  
</div>

</div>
    )
}

export default Navbar
