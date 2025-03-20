import "../Photocard/Photocard.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function Photocard({ photo }) {
  const [photoData, setPhotoData] = useState(photo);

  useEffect(() => {
    if (!photoData) {
      async function getPhoto() {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/photos/${photo.id}`
          );
          setPhotoData(response.data);
        } catch (error) {
          console.error("Error fetching photo:", error);
        }
      }

      getPhoto();
    }
  }, [photo, photoData]);

  if (!photoData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="photoCard">
      <div className="photoCard__img-wrapper">
        <img
          className="photoCard__img"
          src={photoData.photo_url}
          alt={photoData.username}
        />
      </div>
      <div className="photoCard__info-box">
        <h4 className="photoCard__username">{photoData.username}</h4>
        <p className="photoCard__date">
          {new Date(photoData.timestamp).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
        <p className="photoCard__caption">{photoData.caption}</p>
      </div>
    </div>
  );
}

export default Photocard;
