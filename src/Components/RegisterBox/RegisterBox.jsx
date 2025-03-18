import userIcon from "../../Assets/Icons/user.svg";
import lockIcon from "../../Assets/Icons/lock.svg";
import mailIcon from "../../Assets/Icons/mail.svg";
import registerIcon from "../../Assets/Icons/register.svg";
import "../RegisterBox/RegisterBox.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

// const BASE_URL=

function RegisterBox() {
  const [signedup, setSignedup] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const formRef = useRef(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="registerBox__card">
      <img src={registerIcon} alt="register icon" />
      <form
        className="registerBox__form"
        ref={formRef}
        onSubmit={async (e) => {
          e.preventDefault();

          setError(null);
          setSignedup(false);

          const username = e.target.username.value;
          const email = e.target.email.value;
          const password = e.target.password.value;

          if (!username || !email || !password) {
            alert("you must fill out all fields");
            return;
          }

          if (!validateEmail(email)) {
            setError("Invalid email format.");
            return;
          }

          try {
            // all we do here is signup.
            await axios.post("http://localhost:8080/api/register", {
              username,
              email,
              password,
            });
            setSignedup(true);

            if (formRef.current) {
              formRef.current.reset();
            }

            setTimeout(() => {
              navigate("/login");
            }, 2000);
          } catch (e) {
            console.log(e);
            setError(e?.response?.data || "Something went wrong");
          }
        }}
      >
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
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="registerBox__field-container">
            <img className="registerBox__mail" src={mailIcon} alt="mail icon" />
            <input
              className="registerBox__field"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="registerBox__field-container">
            <img className="registerBox__lock" src={lockIcon} alt="lock icon" />
            <input
              className="registerBox__field"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <button className="registerBox__btn">Register</button>
        <Link to="/login" className="registerBox__link" href="/login">
          Already have an account? Login <span>here</span>
        </Link>
        {signedup && <div>Sign up successful, please log in</div>}
        {error && <div>{error}</div>}
      </form>
    </section>
  );
}

export default RegisterBox;
