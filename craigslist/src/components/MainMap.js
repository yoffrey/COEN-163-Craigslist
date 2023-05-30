import React, {useState, useEffect} from "react";
import './MainCategory.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet" 
import 'leaflet/dist/leaflet.css';
import {Icon} from "leaflet";

function MainMap() {
    const position = [37.3494, -121.9381];

    const customIcon = new Icon({
      iconUrl: require("../images/placeholder.png"),
      iconSize: [38, 38]
    });

    return ( 
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style = {{height: '100%', width: '100%', position: "absolute"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon = {customIcon}> 
          <Tooltip>
            Item 1
          </Tooltip>
        </Marker>

        <Marker position={[37.3464, -121.9399]} icon = {customIcon}> 
          <Tooltip>
            Item 2
          </Tooltip>
        </Marker>

        <Marker position={[37.3454, -121.9351]} icon = {customIcon}> 
          <Tooltip>
            Item 3
          </Tooltip>
        </Marker>
        
      </MapContainer>
    );

}

export default MainMap;