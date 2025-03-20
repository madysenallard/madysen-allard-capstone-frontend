import "../Profile/Profile.scss";
import { Link } from "react-router-dom";
import ProfileBox from "../../Components/ProfileBox/ProfileBox";
import arrowIcon from "../../Assets/Icons/arrowback.svg";

function Profile({ user, handleLogout }) {
  return (
    <section className="profile">
      <Link to="/" className="profile__link">
        <img className="profile__icon" src={arrowIcon} alt="arrow icon" />
        <p>My Profile</p>
      </Link>
      <ProfileBox user={user} handleLogout={handleLogout} />
    </section>
  );
}

export default Profile;
