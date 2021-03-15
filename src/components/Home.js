import React from 'react'
import mobile from './assets/home/desktop/image-hero-phone.png'
import Navbar from './Navbar'
function Home() {
    return (
        <div className="home">
        <div className="container">

<Navbar />

<div className="hero row">
<div className="col txt col-sm-12 col-lg-6 col-md-12">
<h1>Award-winning custom designs and digital branding solutions</h1>
<p>
With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
<button>Learn More</button>
</div>
<div className="col col-lg-6 col-md-12 " id="img">
<img src={mobile} alt="hero-img"/>
</div>

</div>
<div className="grid-container">
    
</div>
        </div>
        </div>
    )
}

export default Home
