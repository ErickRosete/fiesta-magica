import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./marker.css"
const Marker = () => {
  return (
      <div>
        <FontAwesomeIcon className="marcadormagico"  icon="map-marker-alt" size="5x" />
        <p className="mapLocationText">Calle A #360 Local 5</p>
      </div>
      // <FontAwesomeIcon className="marcadormagico"  icon="map-marker-alt" size="5x" />

  );
};

export default Marker;