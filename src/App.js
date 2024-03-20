// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SignIn from "./components/SignIn";
import Admin from "./components/Admin";
import Podcaster from "./components/Podcaster";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/podcaster" element={<Podcaster/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
