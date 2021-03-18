import React ,{useEffect} from 'react'
import './Card.css'
import Webblock from './Webblock';
import imageairfilter from "./assets/app-design/desktop/image-airfilter.jpg"
import imageeyecam from "./assets/app-design/desktop/image-eyecam.jpg"
import imagefaceit from "./assets/app-design/desktop/image-faceit.jpg"
import imageloopstudio from "./assets/app-design/desktop/image-loopstudios.jpg"
import imagetodo from "./assets/app-design/desktop/image-todo.jpg"


function Appdesign() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const  Appdesign=[
        {
         img:imagetodo,
         name:'todo',   
         desc:'A todo app that features cloud sync with light and dark mode'   
        },
        {
            img:imageloopstudio,
            name:'loopstudio',   
            desc:'A VR experience app made for Loopstudios'   
           },
       
           {
            img:imagefaceit,
            name:'faceit',   
            desc:'Get to meet your favorite internet superstar with the faceit app'   
           },
           {
            img:imageeyecam,
            name:'eyecam',   
            desc:'Product that lets you edit your favorite photos and videos at any time'   
           },
           {
            img:imageairfilter,
            name:'airfilter',   
            desc:'Solving the problem of poor indoor air quality by filtering the air'   
           },
        
    ]
    return (
        <div className="card-detail">
        <div className="container">
        <div className="card-info">
<div className="container">
<h4>App Design</h4>
<p>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
</div>
             </div>
     
<div className="row">
   {Appdesign.map((ele)=>(
        <div className="col-md-6 col-lg-4 col-sm-12 p-con"> 
       <div className="p-card">
       <img src={ele.img} alt={ele.name}/>
           <h4 id="heading">{ele.name}</h4>
        <p>{ele.desc}</p>
       </div>
       </div>
   ))}
</div>

<div className="row other">
    <div className="col-sm-12 col-lg-6 p-con">
    <Webblock className={'Webdesign col-block'} heading="Web Design" link='/Webdesign' />

    </div>
    <div className="col-sm-12 col-lg-6 p-con">
    <Webblock className={'Graphicdesign col-block'} heading="Graphic Design" link='/Graphicdesign' />

    </div>
</div>
        </div>
       </div>
    )
}

export default Appdesign
