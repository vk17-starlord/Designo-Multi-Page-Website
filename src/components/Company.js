import React from 'react'
import './Company.css'; 
import australia from './assets/shared/desktop/illustration-australia.svg'
import canada from './assets/shared/desktop/illustration-canada.svg'
import uk from './assets/shared/desktop/illustration-united-kingdom.svg'
import { Link } from 'react-router-dom';

function Company() {
    const locations =[
        {name:'Australia',
        img:australia},

        {name:'Canada',
        img:canada},

        {name:'United Kingdom',
        img:uk},
        
]
    return (
        <div className="company container">

<div className="about-card row">
<div className="col-sm-7" id="txt">
    <h4>About Us</h4>
    <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
</div>
<div className="col-sm-5" id="img"></div>

</div>

<div className="wordclass row">
<div className="col-sm-5" id="w-img"></div>

<div className="col-sm-7 " id="w-txt">
<h4>World-class talent</h4>
<p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
<p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
</div>

</div>

<div className="location-cards row">
    {
        locations.map(loc => (
            <div className=' col-sm-12 col-lg-4 col-md-6'>
            <div className="l-card">
            <div className="circle">
                  <img src={loc.img} alt={loc.name}></img>
                  </div>
                 
                  <h4>{loc.name}</h4>
            <Link to="/Location"><button>View Location</button></Link>
            </div>
        </div>
        ))
    }
 
</div>
  
<div className="wordclass row">


<div className="col-sm-7 " id="w-txt">
<h4>The real deal</h4>
<p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
<p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
</div>
<div className="col-sm-5" id="d-img"></div>

</div>

        </div>
    )
}

export default Company
