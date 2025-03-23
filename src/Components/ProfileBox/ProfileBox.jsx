import accountIcon from "../../Assets/Icons/account.svg";
import "../ProfileBox/ProfileBox.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../Assets/Icons/arrowback.svg";

function ProfileBox({ user, handleLogout }) {
  const navigate = useNavigate();

  const userKey = `profile_${user?.user}`;

  const [name, setName] = useState(user?.name || "");
  const [dob, setDob] = useState(user?.dob || "");

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem(userKey);

    if (savedData) {
      const { name: savedName, dob: savedDob } = JSON.parse(savedData);
      if (savedName) setName(savedName);
      if (savedDob) setDob(savedDob);
    }
  }, [userKey]);

  const handleSave = (e) => {
    e.preventDefault();

    const profileData = { name, dob };
    localStorage.setItem(userKey, JSON.stringify(profileData));

    alert("Profile saved!");
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <section className="profileBox__card">
      <Link to="/" className="profileBox__link">
        <img
          className="profileBox__arrow-icon"
          src={arrowIcon}
          alt="arrow icon"
        />
        <p className="profileBox__title">My Profile</p>
      </Link>
      <img
        className="profileBox__icon"
        src={accountIcon}
        alt="user profile photo"
      />
      <form className="profileBox__form" onSubmit={handleSave}>
        <div className="profileBox__fields">
          <div className="profileBox__field-container">
            <input
              className="profileBox__field"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="profileBox__field-container">
            <input
              className="profileBox__field"
              type="text"
              value={user?.username || ""}
              placeholder="Username"
              readOnly
            />
          </div>
          <div className="profileBox__field-container">
            <input
              className="profileBox__field"
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="DOB"
            />
          </div>
        </div>
        <button type="submit" className="profileBox__btn profileBox__btn--save">
          Save Profile
        </button>
        <button
          type="button"
          className="profileBox__btn profileBox__btn--logout"
          onClick={handleLogoutClick}
        >
          Log Out
        </button>
      </form>
    </section>
  );
}

export default ProfileBox;
