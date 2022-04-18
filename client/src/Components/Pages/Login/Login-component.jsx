import React, { useContext } from "react";
import { loginUser } from "../../../Services/User-Service";
import { UsersContext } from "../../../Context/User/User-context";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const { user, setUser ,setIsLoggedIn} = useContext(UsersContext);
  const Navigate = useNavigate();

  const changingTheValue = (e) => {
    user[e.target.name] = e.target.value;
  };
  const SendTheLoginUser = (e) => {
    e.preventDefault();

    console.log(user);

    loginUser(user).then((res) => {
      if (res.token) {
        localStorage.setItem("token", res.token);
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser({ ...decoded.user });
        setIsLoggedIn(true);
        alert(`welcome ${decoded.user.FirstName} `);
        Navigate("/home");
      } else {
        alert("Check your password or email");
      }
    });
  };

  return (
    <div className="login-container">

      <div className="login-form">

<h1 className="login-title">Log-in</h1>
        <label className="login-labels" htmlFor="Email">Email:</label>
        <br />
        <input type="text" name="Email" onChange={changingTheValue} className="login-inputs" />
        <br />

        <label  className="login-labels" htmlFor="password">Password:</label>
        <br />
        <input type="password" name="Password" onChange={changingTheValue} className="login-inputs" />
        <br />
        <button className="login-btn" onClick={SendTheLoginUser}>Confirm</button>
      </div>


      <div className="login-img">
        <img src="https://media.istockphoto.com/vectors/simple-black-childish-hand-drawing-lines-lightbulbs-on-yellow-for-vector-id1218939164?k=20&m=1218939164&s=612x612&w=0&h=l-zFfwmLLP6IxuRam1tRv_s7txDPzTIqML__1qmTG5s=" alt="" />
      </div>
    </div>
  );
}
