import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { withRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.cjs';
AOS.init({
  offset:150,
  duration:500,
  delay:200
});

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 10.95771,
  lng: 78.08095
};

class Google extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyACn4ZN3c-Xtj67OX_78IhDo_a8PcsL8Fs"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default withRouter(Google);