import Map from "../../Components/Map/Map.jsx";
import "../LocationsMap/LocationsMap.scss";

function LocationsMap() {
  return (
    <div className="locationsMap">
      <h1 className="locationsMap__title">Discover Your Next Surf Spot</h1>
      <ul className="locationsMap__desc">
        <h3 className="locationsMap__desc-title">How it Works</h3>
        <li className="locationsMap__list-item">
          On the map page, simply type in any world city to search. The map will
          show pins for nearby beach and surf spots.
        </li>
        <li className="locationsMap__list-item">
          Click on a pin to get the latest weather updates for that spot,
          including wave height, wind speed, and temperature.
        </li>
        <li className="locationsMap__list-item">
          Plan your next surf session!
        </li>
      </ul>
      <Map />
    </div>
  );
}

export default LocationsMap;
