import Photocard from "../Photocard/Photocard";
import React, { useState, useEffect } from "react";
import "../PhotocardList/PhotocardList.scss";
import axios from "axios";

function PhotocardList() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await axios.get("http://localhost:8080/api/photos");
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    fetchPhotos();
  }, []);

  return (
    <div className="photoCardList">
      {photos.map((photo) => (
        <Photocard photo={photo} key={photo.id} />
      ))}
    </div>
  );
}

export default PhotocardList;
