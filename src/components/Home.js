import React from 'react'
import mobile from './assets/home/desktop/image-hero-phone.png'
import Navbar from './Navbar'
import {BsChevronRight } from "react-icons/bs";
import passionate from "./assets/home/desktop/illustration-passionate.svg"
import resourceful from "./assets/home/desktop/illustration-resourceful.svg"
import friendly from "./assets/home/desktop/illustration-friendly.svg"
import Footer from './Footer';
function Home() {

    const features =[
        {
            img:passionate,
            heading:'PASSIONATE',
            desc:'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'

        },
        {
            img:resourceful,
            heading:'resourceful',
            desc:'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'

        },
        {
            img:friendly,
            heading:'friendly',
            desc:'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'

        }
    ]

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
<div className="l-card">
    <div className="i-card web-design">
    <div className="bg">
    <h4>Web Design</h4>
    <a href='https://github.com/vk17-starlord'>View Projects <BsChevronRight></BsChevronRight></a>
    </div>
    </div>
</div>
<div className="r-card">
<div className="i-card app">
<div className="bg">
    <h4>App Design</h4>
    <a href='https://github.com/vk17-starlord'>View Projects <BsChevronRight></BsChevronRight></a>
    </div>
</div>

</div>
<div className="r-card2">
<div className="i-card graphic">
<div className="bg">
    <h4>Graphic Design</h4>
    <a href='https://github.com/vk17-starlord'>View Projects <BsChevronRight></BsChevronRight></a>
    </div>
</div>

</div>
</div>

<div className="features row">

{features.map((feature) =>(

    <div className="col-sm-12 col-md-12 col-lg-4 f-card  row">
         <div className="circle col-sm-12 col-md-4 col-lg-12">
         <img src={feature.img} alt={feature.heading}></img>
         </div>
         <div className="col-sm-12 col-md-8 col-lg-12">
         <h4>{feature.heading}</h4>
          <p>{feature.desc}</p>
             </div>
    </div>
))}

</div>
        
        <Footer/>

        </div>
        
        </div>

    )
}

export default Home
