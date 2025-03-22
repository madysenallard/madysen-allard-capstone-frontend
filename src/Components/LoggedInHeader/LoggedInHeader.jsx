import "../LoggedInHeader/LoggedInHeader.scss";
import surfLogo from "../../Assets/Icons/icons8-surf-50.png";
import React from "react";
import userPhoto from "../../Assets/Icons/account.svg";
import { NavLink, useNavigate, Link } from "react-router-dom";

function LoggedInHeader() {
  const navigate = useNavigate();

  return (
    <section className="loggedInHeader">
      <div className="loggedInHeader__logo-wrapper">
        <NavLink to="/" className="loggedInHeader__container--home">
          <img
            className="loggedInHeader__container--Logo"
            src={surfLogo}
            alt="surf logo"
          />
        </NavLink>
        <div className="loggedInHeader__links">
          <NavLink className="loggedInHeader__links--home" to="/">
            Home
          </NavLink>
        </div>
      </div>
      <div className="loggedInHeader__links">
        <NavLink
          className="loggedInHeader__links--maps-weather"
          to="/maps+weather"
        >
          Maps & Weather
        </NavLink>
        <NavLink className="loggedInHeader__links--connect" to="/connect">
          Connect
        </NavLink>
        <NavLink className="loggedInHeader__links--nature" to="/conservation">
          Protect our Ocean
        </NavLink>
      </div>
      <Link to="/profile">
        <img
          className="loggedInHeader__profile-icon"
          src={userPhoto}
          alt="profile icon"
        />
      </Link>
    </section>
  );
}

export default LoggedInHeader;
