import React from 'react'
import australia from './assets/shared/desktop/illustration-australia.svg'
import canada from './assets/shared/desktop/illustration-canada.svg'
import uk from './assets/shared/desktop/illustration-united-kingdom.svg'
import { Link } from 'react-router-dom';
import './Company.css'; 
function LocationCard() {
    const locations =[
        {name:'Australia',
        img:australia},

        {name:'Canada',
        img:canada},

        {name:'United Kingdom',
        img:uk},
        
]
    return (
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
    )
}

export default LocationCard
