import "../Profile/Profile.scss";
import { Link } from "react-router-dom";
import ProfileBox from "../../Components/ProfileBox/ProfileBox";
import arrowIcon from "../../Assets/Icons/arrowback.svg";

function Profile() {
  return (
    <section className="profile">
      <Link to="/profile" className="profile__link">
        <img src={arrowIcon} alt="arrow icon" />
        <p>My Profile</p>
      </Link>
      <ProfileBox />
    </section>
  );
}

export default Profile;
