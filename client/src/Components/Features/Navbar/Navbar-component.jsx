import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="the-navbar">
      <div className="left-nav">
        <Link className="nav-links" to="home">HOME</Link> 
      </div>
      <div className="right-nav">

      </div>

    </div>

  );
}
