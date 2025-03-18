import "../LoggedInHeader/LoggedInHeader.scss";
import surfLogo from "../../Assets/Icons/icons8-surf-50.png";
import React from "react";
import userPhoto from "../../Assets/Icons/account.svg";
import { NavLink, useNavigate, Link } from "react-router-dom";

function LoggedInHeader() {
  const navigate = useNavigate();

  return (
    <section className="header">
      <div className="header__logo-wrapper">
        <NavLink to="/" className="header__container--home">
          <img
            className="header__container--Logo"
            src={surfLogo}
            alt="surf logo"
          />
        </NavLink>
        <div className="header__links">
          <NavLink className="header__links--home" to="/">
            Home
          </NavLink>
        </div>
      </div>
      <div className="header__links">
        <NavLink className="header__links--maps-weather" to="/maps+weather">
          Maps & Weather
        </NavLink>
        <NavLink className="header__links--connect" to="/connect">
          Connect
        </NavLink>
        <NavLink className="header__links--nature" to="/conservation">
          Protect our Nature
        </NavLink>
      </div>
      <Link to="/profile">
        <img src={userPhoto} alt="profile icon" />
      </Link>
    </section>
  );
}

export default LoggedInHeader;
