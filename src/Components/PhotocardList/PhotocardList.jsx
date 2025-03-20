import Photocard from "../Photocard/Photocard";
import React, { useState, useEffect } from "react";
import "../PhotocardList/PhotocardList.scss";
import axios from "axios";

function PhotocardList() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/api/photos");
        setPhotos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setError("Failed to upload");
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  const sortedPhotos = [...photos].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  if (loading)
    return <div className="photoCardList__loading">Loading photos...</div>;
  if (error) return <div className="photoCardList__error">{error}</div>;
  if (photos.length === 0)
    return <div className="photoCardList__empty">No photos available</div>;

  return (
    <div className="photoCardList">
      {sortedPhotos.map((photo) => (
        <Photocard photo={photo} key={photo.id} />
      ))}
    </div>
  );
}

export default PhotocardList;
