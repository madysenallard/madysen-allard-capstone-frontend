import "../Photocard/Photocard.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function Photocard({ id }) {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    getPhoto();
  }, [id]);

  async function getPhoto() {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/photos/${id}`
      );
      setPhoto(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  //loading screen while component is rendering
  if (!photo) return <p>Loading...</p>;

  return (
    <div className="photoCard">
      <div className="photoCard__img-wrapper">
        <img className="photoCard__img" src={photo.photo} />
      </div>
      <div className="photoCard__info-box">
        <h4 className="photoCard__username">{photo.username}</h4>
        <p className="photoCard__likes">{photo.likes}</p>
        <p className="photoCard__date">
          {new Date(photo.timestamp).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}

export default Photocard;
