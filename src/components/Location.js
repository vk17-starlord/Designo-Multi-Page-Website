import React from 'react';
import './location.css'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
function Location() {
  const position = [43.6487, -79.37548]
 const aus = [-29.4236, 148.735]
 const uk=[53.70988,-1.33269]
    return (
        <div className="location-container">

        <div className="container">
          <div className="row">

        <div className="col-sm-12 col-lg-8 map">
          <div className="m-card">
    
    
           <div className="row">
           <h4>Canada</h4>
             <div className="col-sm-12 col-lg-6 m-col">
      
             <p>

<strong>Designo Central Office</strong> 
</p>
<p>3886 Wellington Street</p>
   <p>
Toronto, Ontario M9C 3J5</p>
             </div>
             <div className="col-sm-12 col-lg-6 ">
             <p>

<strong>Contact</strong> 
</p>
<p>P: +1 253-863-8967</p>
   <p>
M: contact@gmail.com</p>
             </div>
           </div>

          </div>
        </div>
        <div className="col-sm-12 col-lg-4 map">
        <div className="m-card">

        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>

        </div>

        </div>

          </div>

          {/* map3 */}
          <div className="row">
          <div className="col-sm-12 col-lg-4 map">
<div className="m-card">

<MapContainer center={aus} zoom={13} scrollWheelZoom={false}>
<TileLayer
attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={aus}>
<Popup>
A pretty CSS3 popup. <br /> Easily customizable.
</Popup>
</Marker>
</MapContainer>

</div>

</div>
<div className="col-sm-12 col-lg-8 map">
  <div className="m-card">


   <div className="row">
   <h4>Australia</h4>
     <div className="col-sm-12 col-lg-6 m-col">

     <p>

<strong>Designo Central Office</strong> 
</p>
<p>19 Balonne street</p>
<p>
New South Whales 2443</p>
     </div>
     <div className="col-sm-12 col-lg-6 ">
     <p>

<strong>Contact</strong> 
</p>
<p>P: (02) 6535 8967</p>
<p>
M: contact@gmail.com</p>
     </div>
   </div>

  </div>
</div>


  </div>

  <div className="row">

<div className="col-sm-12 col-lg-8 map">
  <div className="m-card">


   <div className="row">
   <h4>United Kingdom</h4>
     <div className="col-sm-12 col-lg-6 m-col">

     <p>

<strong>Designo Central Office</strong> 
</p>
<p>13 colarado way</p>
<p>
Rhyd-y-fryo SA8 9</p>
     </div>
     <div className="col-sm-12 col-lg-6 ">
     <p>

<strong>Contact</strong> 
</p>
<p>P: 078 3117 1440</p>
<p>
M: contact@gmail.com</p>
     </div>
   </div>

  </div>
</div>
<div className="col-sm-12 col-lg-4 map">
<div className="m-card">

<MapContainer center={uk} zoom={13} scrollWheelZoom={false}>
<TileLayer
attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={uk}>
<Popup>
A pretty CSS3 popup. <br /> Easily customizable.
</Popup>
</Marker>
</MapContainer>

</div>

</div>

  </div>
        </div>
          

        </div>
    )
}

export default Location
