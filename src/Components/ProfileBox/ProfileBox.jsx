import axios from "axios";
import accountIcon from "../../Assets/Icons/account.svg";
import "../ProfileBox/ProfileBox.scss";

function ProfileBox() {
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
