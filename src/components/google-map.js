import React from 'react';
import { GoogleMapLoader, GoogleMap } from "react-google-maps";

const SimpleMap = ({ lat, lng }) => {
  return(
    <GoogleMapLoader
        containerElement={<div style={{height: "150px", width: '200px'}} />}
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: lat, lng: lng }}
          >
          </GoogleMap>
        }
      />
  );
}

export default SimpleMap;
