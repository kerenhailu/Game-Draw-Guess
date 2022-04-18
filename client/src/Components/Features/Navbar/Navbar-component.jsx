import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../../Context/User/User-context";
import "./NavBar.css";
import { MdLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';




export default function Navbar() {
  const navigate = useNavigate();
  const { user, setUser, setIsLoggedIn } = useContext(UsersContext);
  const LogOut = () => {
    localStorage.removeItem("token")
    setUser({})
    setIsLoggedIn(false)
    navigate("/")
  }

  return (
    <div className="the-navbar">
      <div className="left-nav">
        <Link className="nav-links" to="home">ICON</Link>
        <Link className="nav-links" to="home">HOME</Link> 
        {user.isAdmin ?
          <Link className="nav-links" to="admin">Admin</Link>
          : ''}
        {/* <Link className="nav-links" to="/">LOGIN</Link> */}
        <Link className="nav-links" to="ideas">Ideas</Link>
      </div>
      <div className="right-nav">

        <Link className="nav-links" to={`profile/${user._id}`}>
          <img className="PicUser" src={user.ProfilePic} alt="picUser"/></Link>
        <Link className="nav-links" to="/" onClick={LogOut}><MdLogout /></Link>

      </div>

    </div>

  );
}
