import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

function Map() {

  const position = [61.51610143231556, 23.76466902943774]
  
  return (

    <MapContainer id="Map" center={position} zoom={14} scrollWheelZoom={true}>
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

  );
}

export default Map;