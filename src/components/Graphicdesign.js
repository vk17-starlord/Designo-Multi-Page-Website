import React ,{useEffect} from 'react'
import boxedwater from "./assets/graphic-design/desktop/image-boxed-water.jpg"
import change from "./assets/graphic-design/desktop/image-change.jpg"
import science from "./assets/graphic-design/desktop/image-science.jpg"
import './Card.css'
import Webblock from './Webblock';

function Graphicdesign() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

 const   Graphicdesign=[
        {
         img:change,
         name:'TIM Brownie',   
         desc:'A book cover designed for Tim Brown’s new release, ‘Change’'   
        },
        {
            img:boxedwater,
            name:'boxed water!',   
            desc:'A simple packaging concept made for Boxed Water'   
           },
       
           {
            img:science,
            name:'science',   
            desc:'A poster made in collaboration with the Federal Art Project'   
           },
       
    ]
    return (
        <div className="card-detail">
        <div className="container">
        <div className="card-info">
<div className="container">
<h4>Graphic Design</h4>
<p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
</div>
             </div>
     
<div className="row">
   {Graphicdesign.map((ele)=>(
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
    <Webblock className={'Appdesign col-block'} heading="App Design" link='/Appdesign' />

    </div>
    <div className="col-sm-12 col-lg-6 p-con">
    <Webblock className={'Webdesign col-block'} heading="Web Design" link='/Webdesign' />

    </div>
</div>
        </div>
       </div>
    )
}

export default Graphicdesign
