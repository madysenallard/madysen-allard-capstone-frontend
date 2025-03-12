import axios from "axios";
import userIcon from "../../Assets/Icons/user.svg";
import accountIcon from "../../Assets/Icons/account.svg";
import lockIcon from "../../Assets/Icons/lock.svg";
import profileBox from "../ProfileBox/ProfileBox.scss";

function ProfileBox() {
  return (
    <section className="profileBox__card">
      <img src={profilePic} alt="user profile photo" />
      <form className="profileBox__form" onSubmit={handleSubmit}>
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
              placeholder="Username"
            />
          </div>
          <div className="profileBox__field-container">
            <input
              className="profileBox__field"
              type="text"
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
        <button className="profileBox__btn">Log Out</button>
      </form>
    </section>
  );
}

export default ProfileBox;
