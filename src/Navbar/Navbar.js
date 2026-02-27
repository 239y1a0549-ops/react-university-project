
 
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">Landing</Link>
      <Link to="/home">Home</Link>
      <Link to="/hodprofile">HoD Profile</Link>
      <Link to="/features">Admissions</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
