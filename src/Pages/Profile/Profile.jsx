import "../Profile/Profile.scss";
import ProfileBox from "../../Components/ProfileBox/ProfileBox";

function Profile({ user, handleLogout }) {
  return (
    <section className="profile">
      <ProfileBox user={user} handleLogout={handleLogout} />
    </section>
  );
}

export default Profile;
