import axios from "axios";
import userIcon from "../../Assets/Icons/user.svg";
import accountIcon from "../../Assets/Icons/account.svg";
import lockIcon from "../../Assets/Icons/lock.svg";
import "../LoginBox/LoginBox.scss";

function LoginBox() {
  return (
    <section className="loginBox__card">
      <img src={accountIcon} alt="account user icon" />
      <form className="loginBox__form">
        <div className="loginBox__fields">
          <div className="loginBox__field-container">
            <img
              className="loginBox__user-profile"
              src={userIcon}
              alt="user icon"
            />
            <input
              className="loginBox__field"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="loginBox__field-container">
            <img className="loginBox__lock" src={lockIcon} alt="lock icon" />
            <input
              className="loginBox__field"
              type="text"
              placeholder="Password"
            />
          </div>
        </div>
        <a className="loginBox__link" href="#">
          Forgot your password?
        </a>
        <button className="loginBox__btn">Login</button>
        <a className="loginBox__link" href="#">
          Don't have an account? Register <span>here</span>
        </a>
      </form>
    </section>
  );
}

export default LoginBox;
