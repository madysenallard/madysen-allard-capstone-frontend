import axios from "axios";
import userIcon from "../../Assets/Icons/user.svg";
import accountIcon from "../../Assets/Icons/account.svg";
import lockIcon from "../../Assets/Icons/lock.svg";
import "../LoginBox/LoginBox.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

// const BASE_URL=

function LoginBox({ setToken }) {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  return (
    <section className="loginBox__card">
      <img src={accountIcon} alt="account user icon" />
      <form
        className="loginBox__form"
        ref={formRef}
        onSubmit={async (e) => {
          e.preventDefault();

          setError(null);

          const username = e.target.username.value;
          const password = e.target.password.value;

          if (!username || !password) {
            alert("need username and password");
            return;
          }

          // contains the token
          try {
            const { data } = await axios.post(
              "http://localhost:8080/api/login",
              {
                username,
                password,
              }
            );

            const { token } = data;

            // sets in localstorage
            localStorage.setItem("token", token);
            setToken(token);

            if (formRef.current) {
              formRef.current.reset();
            }

            navigate("/");
          } catch (e) {
            setError(e?.response?.data || "something went wrong");
          }
        }}
      >
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
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="loginBox__field-container">
            <img className="loginBox__lock" src={lockIcon} alt="lock icon" />
            <input
              className="loginBox__field"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="loginBox__password-toggle"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <a className="loginBox__link" href="#">
          Forgot your password?
        </a>
        <button className="loginBox__btn">Login</button>
        <Link className="loginBox__link" to="/register">
          Don't have an account? Register <span>here</span>
        </Link>
        {error && <div>{error}</div>}
      </form>
    </section>
  );
}

export default LoginBox;
