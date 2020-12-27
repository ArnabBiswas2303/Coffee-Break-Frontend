import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import classes from "./Map.module.css";

//Map component
const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN;
    console.log(process.env.REACT_APP_ACCESS_TOKEN);
    //Initial Map Object
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [88.49893291250312, 27.186697279771114],
        zoom: 12,
      });
      const marker = new mapboxgl.Marker()
        .setLngLat([88.49893291250312, 27.186697279771114])
        .addTo(map);
      map.on("load", () => {
        setMap(map);
        setMap(marker);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div ref={(el) => (mapContainer.current = el)} className={classes["map"]} />
  );
};

export default MapboxGLMap;
