import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './Home/Home';
import Admissions from './Admissions/Admissions';
import HoDProfile from './HoDProfile/HoDProfile';
import About from './About/About';
import Contact from './Contact/Contact';
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hodprofile" element={<HoDProfile />} />
        <Route path="/features" element={<Admissions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
