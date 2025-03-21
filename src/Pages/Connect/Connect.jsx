import PhotocardList from "../../Components/PhotocardList/PhotocardList";
import axios from "axios";
import "../Connect/Connect.scss";
import { useState } from "react";
import closeIcon from "../../Assets/Icons/close-icon.svg";

function Connect({ isLoggedIn }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState("");
  const [refreshList, setRefreshList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("caption", caption);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/photos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 201) {
        alert("Photo uploaded successfully!");
        setIsModalOpen(false);
        setPhoto(null);
        setCaption("");
        setRefreshList((prev) => !prev);
      }
    } catch (error) {
      console.error("Error uploading photo:", error);
      alert("Failed to upload photo.");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = filteredPhotos.filter((photo) =>
      photo.caption.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPhotos(filtered);
  };

  return (
    <div className="connect">
      <div className="connect__header-section">
        <h1 className="connect__title">Surf Connect</h1>
        <p className="connect__subtitle">
          Share your surf adventures with the community!
        </p>
      </div>

      <div className="connect__header">
        {isLoggedIn && (
          <button
            className="connect__post-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Create New Post
          </button>
        )}
        <form className="connect__search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="connect__search-btn">
            Search
          </button>
        </form>
      </div>

      {isModalOpen && (
        <div className="connect__modal">
          <div className="connect__modal-content">
            <span
              className="connect__modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              <img src={closeIcon} alt="x icon" />
            </span>
            <h2 className="connect__modal-subtitle">Upload a Photo</h2>
            <form className="connect__modal-form" onSubmit={handleSubmit}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                required
              />
              <textarea
                className="connect__modal-form-text"
                placeholder="Add a caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                required
              ></textarea>
              <button className="connect__modal-btn" type="submit">
                Post
              </button>
            </form>
          </div>
        </div>
      )}

      <PhotocardList key={refreshList} photos={filteredPhotos} />
    </div>
  );
}

export default Connect;
