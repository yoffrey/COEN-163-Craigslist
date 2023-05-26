import React, {useState, useEffect} from "react";
import './MainCategory.css';
import SubMap from "./SubMap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet" 
import 'leaflet/dist/leaflet.css';


function MainMap() {
    const position = [37.3494, -121.9381];

    return ( 
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style = {{height: '100%', width: '100%', position: "absolute"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );

}

export default MainMap;