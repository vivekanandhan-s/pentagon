import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from '@iconify/react'

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyACn4ZN3c-Xtj67OX_78IhDo_a8PcsL8Fs+' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon="fa6-solid:indian-rupee-sign" className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )


  export default LocationPin;