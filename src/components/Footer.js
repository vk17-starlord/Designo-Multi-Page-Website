import React from 'react'
import './Footer.css'; 
import logo from './assets/shared/desktop/logo-light.png'
import facebook from './assets/shared/desktop/icon-facebook-color.svg'
import instagram from './assets/shared/desktop/icon-instagram-color.svg'
import pinterest from './assets/shared/desktop/icon-pinterest-color.svg'
import twitter from './assets/shared/desktop/icon-twitter-color.svg'
import youtube from './assets/shared/desktop/icon-youtube-color.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-card row">
              <div className="col-sm-12 col-lg-6 col ">
         <h4>     Let’s talk about your project</h4>
<p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow
</p>
                  </div>  
              <div className="col-sm-12 col-lg-6 col">
                  <button>Get in touch</button></div>  

            </div>

            <div className="main-footer">
<div className="container">
    <div className="f-nav">
        <img src={logo} alt="logo"></img>
        <div className="links">
        <a href="https://github.com/vk17-starlord">our company</a>    
  
  <a href="https://github.com/vk17-starlord">locations</a>    
  <a href="https://github.com/vk17-starlord">contact</a>  

        </div>
    </div>


<div className="row info">
    <div className="col-sm-12 col-lg-3 i-div ">
        

<p>Designo Central Office</p>
<p>3886 Wellington Street</p>
<p>Toronto, Ontario M9C 3J5</p>
        </div>
        
    <div className="col-sm-12 col-lg-3 i-div ">
        
<p>

Contact Us (Central Office)</p>
<p>P : +1 253-863-8967</p>
<p>M : contact@designo.co</p>
        </div>
        
    <div className="col-sm-12 col-lg-6 i-div ">
       <div>
           
        <img alt="alt-txt" src={facebook}></img>
        <img alt="alt-txt" src={instagram}></img>
        <img alt="alt-txt" src={twitter}></img>
        <img alt="alt-txt" src={youtube}></img>
        <img alt="alt-txt" src={pinterest}></img>
       </div>

        </div>
</div>

</div>
            </div>
        </footer>
    )
}

export default Footer
