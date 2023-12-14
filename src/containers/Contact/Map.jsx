import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const locations = [
    { lng: 3.4219, lat: 6.4701 }, // Lekki
    { lng: 3.3411, lat: 6.5542 }, // Oshodi
    { lng: 3.3505, lat: 6.4628 }, // Ijora
    { lng: 3.4918, lat: 6.6191 }, // Ikorodu
    { lng: 3.6533, lat: 6.4701 }, // Sangotedo
    { lng: 3.2515, lat: 6.5488 }, // Igando
    { lng: 3.3437, lat: 6.6194 }, // Agege
  ];

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach(({ lng, lat }) => bounds.extend([lng, lat]));

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: bounds.getCenter().toArray(),
      zoom: 10.5,
      preserveDrawingBuffer: true,
      dragRotate: false,
      pitchWithRotate: false,
      scrollZoom: false,
    });

    map.current.on('load', () => {
      locations.forEach(({ lng, lat }) => {
        addMarkerWithPopup([lng, lat]);
      });
    });
  }, [locations]);

  const addMarkerWithPopup = (coordinates) => {
    const marker = new mapboxgl.Marker({ color: 'red' }).setLngLat(coordinates);

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates[0]},${coordinates[1]}.json?access_token=${mapboxgl.accessToken}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const [feature] = data.features;
        const address = feature.place_name;

        marker.setPopup(
          new mapboxgl.Popup({ autoClose: false, closeButton: false }).setHTML(
            `<p>${address}</p>`
            // `<div>
            //   <p>${address}</p>
            //   <a href="geo:${coordinates[1]},${coordinates[0]}?q=${coordinates[1]},${coordinates[0]}" className="outline-none bg-green-500 p-0.5">Open in Maps</a>
            // </div>`
          )
        );

        marker.addTo(map.current);
      })
      .catch((error) => {
        console.error('Error fetching geocoding data:', error);
      });
  };

  return (
    <div
      ref={mapContainer}
      id='map'
      className='w-full h-[470px] rounded-2xl mx-auto mt-[72px]'
    />
  );
};

export default Map;
