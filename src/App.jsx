import "./App.scss";
import Conservation from "./Pages/Conservation/Conservation";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import HomePage from "./Pages/Homepage/Homepage.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import LocationsMap from "./Pages/LocationsMap/LocationsMap.jsx";
import Connect from "./Pages/Connect/Connect.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header/Header.jsx";
import LoggedInHeader from "./Components/LoggedInHeader/LoggedInHeader.jsx";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isLoggedIn = !!token && !!user;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    getProfile();
    async function getProfile() {
      console.log(token);
      setLoading(true);
      // if the token got passed in, get the user profile
      if (token) {
        try {
          const { data } = await axios.get(`${BASE_URL}/api/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(data);
        } catch (e) {
          console.log(e);
        }
      } else {
        // else, there is no token anymore (logout) reset the user back to null
        setUser(null);
      }
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <BrowserRouter>
        {isLoggedIn ? <LoggedInHeader user={user} /> : <Header />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/maps+weather" element={<LocationsMap />} />
          <Route
            path="/connect"
            element={<Connect isLoggedIn={isLoggedIn} />}
          />
          <Route path="/conservation" element={<Conservation />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={<Profile user={user} handleLogout={handleLogout} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
