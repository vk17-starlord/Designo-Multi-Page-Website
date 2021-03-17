import React from 'react'
import './Contact.css';
import LocationCard from './LocationCard'
function Contact() {
    return (
        <div className="container">
                   <div className="contact-form row">
                       <div className="col-sm-12 col-lg-7" id="msg">
<h4>Contact Us</h4>
              <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                       </div>
 <div className="col-sm-12 col-lg-5" id="form">
                           <input type="text" placeholder="Name"></input>
                           <input type="email" placeholder="Email"></input>
                           <input type="text" placeholder="Phone"></input>
                         <textarea placeholder="Your Message"></textarea>
<button>submit</button>
                       </div>


                   </div>
  <LocationCard /> 
        </div>
    )
}

export default Contact
