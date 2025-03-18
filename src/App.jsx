import "./App.scss";
import Conservation from "./Pages/Conservation/Conservation";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import HomePage from "./Pages/Homepage/Homepage.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import LocationsMap from "./Pages/LocationsMap/LocationsMap.jsx";
import Connect from "./Pages/Connect/Connect.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Maps+Weather" element={<LocationsMap />} />
          <Route path="/Connect" element={<Connect />} />
          <Route path="/conservation" element={<Conservation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
