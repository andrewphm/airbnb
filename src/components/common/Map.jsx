import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

const Map = ({ data, elRefs }) => {
  const coordinates = data.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/gramsay7/ckz5q1ahn003016mhi54o1759"
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {data.map((item, i) => (
        <div ref={elRefs[i]} key={i} className="relative hover:z-50 ">
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <a href={`#${i}`} className="text-base">
              <p className="bg-white py-1 px-4 rounded-full border shadow-lg font-semibold hover:scale-105">
                {item.total.split(' ')[0]} CAD
              </p>
            </a>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
