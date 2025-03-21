import "../Photocard/Photocard.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import locationIcon from "../../Assets/Icons/location-icon.svg";
import moreIcon from "../../Assets/Icons/more-icon.svg";
import favoriteIcon from "../../Assets/Icons/favorite-icon.svg";
import userIcon from "../../Assets/Icons/account-black.svg";

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
        <div className="photoCard__top-wrapper">
          <div className="photoCard__left-wrapper">
            <img src={userIcon} alt="user icon" />

            <p className="photoCard__user">{photoData.username}</p>
          </div>
          <img
            className="photoCard__more-icon"
            src={moreIcon}
            alt="more icon"
          />
        </div>
        <img
          className="photoCard__img"
          src={photoData.photo_url}
          alt={photoData.username}
        />
      </div>
      <div className="photoCard__info-box">
        <div className="photoCard__icon-box">
          <img src={favoriteIcon} alt="heart icon" />
          <img src={locationIcon} alt="pin icon" />
        </div>
        <div className="photoCard__info-wrapper">
          <h4 className="photoCard__username">{photoData.username}</h4>
          <p className="photoCard__date">
            {new Date(photoData.timestamp).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
        <p className="photoCard__caption">{photoData.caption}</p>
      </div>
    </div>
  );
}

export default Photocard;
