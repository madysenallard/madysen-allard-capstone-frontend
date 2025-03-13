import userIcon from "../../Assets/Icons/user.svg";
import lockIcon from "../../Assets/Icons/lock.svg";
import mailIcon from "../../Assets/Icons/mail.svg";
import registerIcon from "../../Assets/Icons/register.svg";
import "../RegisterBox/RegisterBox.scss";

function RegisterBox() {
  return (
    <section className="registerBox__card">
      <img src={registerIcon} alt="register icon" />
      <form className="registerBox__form">
        <div className="registerBox__fields">
          <div className="registerBox__field-container">
            <img
              className="registerBox__user-profile"
              src={userIcon}
              alt="user icon"
            />
            <input
              className="registerBox__field"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="registerBox__field-container">
            <img className="registerBox__mail" src={mailIcon} alt="mail icon" />
            <input
              className="registerBox__field"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="registerBox__field-container">
            <img className="registerBox__lock" src={lockIcon} alt="lock icon" />
            <input
              className="registerBox__field"
              type="text"
              placeholder="Password"
            />
          </div>
        </div>
        <button className="registerBox__btn">Login</button>
        <a className="registerBox__link" href="#">
          Already have an account? Login <span>here</span>
        </a>
      </form>
    </section>
  );
}

export default RegisterBox;
