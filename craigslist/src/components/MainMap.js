import React from "react";
import './MainCategory.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet" 
import 'leaflet/dist/leaflet.css';
import {Icon} from "leaflet";
import { useNavigate } from "react-router-dom";


function MainMap() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('handler function reached')
    navigate('./product');
  };

    const position = [37.3494, -121.9381];

    const customIcon = new Icon({
      iconUrl: require("../images/placeholder.png"),
      iconSize: [38, 38]
    });

    const customMa = new Icon({
      iconUrl: require("../images/yellow_mama.png"),
      iconSize: [50,80]
    })

    return ( 
        <MapContainer center={[37.340, -121.9081]} zoom={14} scrollWheelZoom={false} style = {{height: '100%', width: '100%', position: "absolute"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon = {customMa}>    
          <Tooltip>
            You
          </Tooltip>
        </Marker>

        <Marker position={[37.354, -121.94]} icon = {customIcon}  eventHandlers={{click: handleClick}}> 
          <Tooltip>
            Table and Chairs
          </Tooltip>
        </Marker>

        <Marker position={[37.3464, -121.9399]} icon = {customIcon}  eventHandlers={{click: handleClick}}> 
          <Tooltip>
            Weber Spirit w/ Side Burner
          </Tooltip>
        </Marker>

        <Marker position={[37.3454, -121.9351]} icon = {customIcon}  eventHandlers={{click: handleClick}}> 
          <Tooltip>
            Stone chess set
          </Tooltip>
        </Marker>
        
      </MapContainer>
    );

}

export default MainMap;