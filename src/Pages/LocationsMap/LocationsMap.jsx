import Map from "../../Components/Map/Map.jsx";
import "../LocationsMap/LocationsMap.scss";

function LocationsMap() {
  return (
    <div className="locationsMap">
      <h1 className="locationsMap__title">Discover Your Next Surf Spot</h1>
      <Map />
    </div>
  );
}

export default LocationsMap;
