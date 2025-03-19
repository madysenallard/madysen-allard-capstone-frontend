import axios from "axios";
import accountIcon from "../../Assets/Icons/account.svg";
import "../ProfileBox/ProfileBox.scss";
import { useNavigate } from "react-router-dom";

function ProfileBox({ user, handleLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <section className="profileBox__card">
      <img src={accountIcon} alt="user profile photo" />
      <form className="profileBox__form">
        <div className="profileBox__fields">
          <div className="profileBox__field-container">
            <input
              className="profileBox__field"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="profileBox__field-container">
            <input
              className="profileBox__field"
              type="text"
              value={user?.username || ""}
              placeholder="Username"
            />
          </div>
          <div className="profileBox__field-container">
            <input
              className="profileBox__field"
              type="email"
              value={user?.email || ""}
              placeholder="Email"
            />
          </div>
          <div className="profileBox__field-container">
            <input
              className="profileBox__field"
              type="text"
              placeholder="DOB"
            />
          </div>
        </div>
        <button
          type="button"
          className="profileBox__btn"
          onClick={handleLogoutClick}
        >
          Log Out
        </button>
      </form>
    </section>
  );
}

export default ProfileBox;
