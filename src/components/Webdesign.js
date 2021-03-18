import React  ,{useEffect}from 'react';
import './Card.css'
import Webblock from './Webblock';
import imageblogr from "./assets/web-design/desktop/image-blogr.jpg"
import imagebuilder from "./assets/web-design/desktop/image-builder.jpg"
import imageexpress from "./assets/web-design/desktop/image-express.jpg"
import imagecamp from "./assets/web-design/desktop/image-camp.jpg"
import imagephoton from "./assets/web-design/desktop/image-photon.jpg"
import imagetransfer from "./assets/web-design/desktop/image-transfer.jpg"

    function Webdesign() {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [])
    
       const Webdesign=[
            {
             img:imageexpress,
             name:'EXPRESS',   
             desc:'A multi-carrier shipping website for ecommerce businesses'   
            },
            {
                img:imagetransfer,
                name:'TRANSFER',   
                desc:'Site for low-cost money transfers and sending money within seconds'   
               },
           
               {
                img:imagephoton,
                name:'photon',   
                desc:'Get to meet your favorite internet superstar with the faceit app'   
               },
               {
                img:imagebuilder,
                name:'builder',   
                desc:'Connects users with local contractors based on their location'   
               },
             
               {
                img:imageblogr,
                name:'blogr',   
                desc:'Blogr is a platform for creating an online blog or publication'   
               },
               {
                img:imagecamp,
                name:'camp',   
                desc:'Get expert training in coding, data, design, and digital marketing'   
               },
        ]

    return (
        <div className="card-detail">
         <div className="container">
         <div className="card-info">
<div className="container">
<h4>Web Design</h4>
<p>We build websites that serve as powerful marketing tools and bring memorable brand experiences</p>  
</div>
              </div>
      
<div className="row">
    {Webdesign.map((ele)=>(
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
    <Webblock className={'Graphicdesign col-block'} heading="Graphic Design" link='/Graphicdesign' />

    </div>
</div>

         </div>
        </div>
    )
}

export default Webdesign
