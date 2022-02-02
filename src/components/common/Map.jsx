import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = ({}) => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/gramsay7/ckz5q1ahn003016mhi54o1759"
      mapboxApiAccessToken={process.env.mapbox_key}
    ></ReactMapGL>
  );
};

export default Map;
