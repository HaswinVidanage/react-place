import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Circle } from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(props => (
   
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: 3.1390, lng: 101.6869 }}
    >
      {props.marks.map((mark, index) => (
        <Circle
          key={index}
          center={mark}
          radius={2000}
          options={{
            strokeColor: "#9a2044",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: `#9a0600`,
            fillOpacity: 0.35,
            zIndex: 1
          }}
        />
      ))}
    </GoogleMap>
  ))
);

class MapComponent extends Component {
 
  
  deleteMarkS = () => {
    this.setState({
      marks: []
    });
  };
  
  render() {
    
    return (
      <div>
        <Map
          googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyD1K_gzX8c9dAAsW8HUt1VDwc9wW9oziUo"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMapClick={this.setMark}
          marks={this.props.mapLocations ? this.props.mapLocations: []}
        />;
      </div>
    );
  }
}

export default MapComponent;