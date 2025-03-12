import "../Header/Header.scss";
import surfLogo from "../../Assets/Icons/icons8-surf-50.png";
import {NavLink, useNavigate} from React;
import React from "react-router-dom";

function Header() {
    const navigate = useNavigate();

  return (
    <section className="header">
      <div className="header__logo-wrapper">
        <NavLink to="/" className="header__container--home">
          <img
            href="/"
            className="header__container--Logo"
            src={surfLogo}
            alt="surf logo"
          />
        </NavLink>
        <div className="header__links">
        <NavLink
          className="header__links--home"
          to="/"
        >
          Home
        </NavLink>
      </div>
      </div>
      <div className="header__links">
        <NavLink
          className="header__links--maps-weather"
          to="/"
        >
          Maps & Weather
        </NavLink>
        <NavLink
          className="header__links--connect"
          to="/"
        >
          Connect
        </NavLink>
        <NavLink
          className="header__links--nature"
          to="/"
        >
          Protect our Nature
        </NavLink>
      </div>
      <div className="header__btn-wrapper">
        <button className="header__login-btn" onClick={() => navigate("/")}>
      Login
        </button>
        <button className="header__register-btn" onClick={() => navigate("/")}>Register</button>
      </div>
    </section>
  );
}

export default Header;
