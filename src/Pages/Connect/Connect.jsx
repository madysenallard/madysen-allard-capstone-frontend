import PhotocardList from "../../Components/PhotocardList/PhotocardList";
import axios from "axios";
import "../Connect/Connect.scss";
import { useState, useEffect } from "react";

function Connect({ isLoggedIn }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState("");
  const [refreshList, setRefreshList] = useState(false);

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
        setRefreshList((prev) => !prev); //triggers a refresh
      }
    } catch (error) {
      console.error("Error uploading photo:", error);
      alert("Failed to upload photo.");
    }
  };
  return (
    <div className="connect">
      {isLoggedIn && (
        <button
          className="connect__post-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Create New Post
        </button>
      )}
      {isModalOpen && (
        <div className="connect__modal">
          <div className="connect__modal-content">
            <span
              className="connect__modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              close icon here
            </span>
            <h2 className="connect__modal-subtitle">Upload a Photo</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                required
              />
              <textarea
                placeholder="Add a caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                required
              ></textarea>
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
      )}
      <PhotocardList key={refreshList} />;
    </div>
  );
}

export default Connect;
