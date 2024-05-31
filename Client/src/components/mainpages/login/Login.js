import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setuser] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });
      localStorage.setItem("firstLogin", true);
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="login-page">
      <form onSubmit={loginSubmit}>
       <div className="emailipt" >
       <label className="lbl" >Email</label>
        <input
          type="email"
          required
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={onChangeInput}
        />
       </div>
       <div className="passwordipt" >
       <label className="lbl" >Password</label>
        <input
          type="password"
          required
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={onChangeInput}
        />
       </div>
        <div className="row">
          <button type="submit">Login</button>
          <Link to="/register">Register Here</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
