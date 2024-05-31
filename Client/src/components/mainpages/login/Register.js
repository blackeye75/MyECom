import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setuser] = useState({
    name:"",
    email: '',
    password: '',
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", { ...user });
      localStorage.setItem("firstRegister", true);
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="register-page">
      <form onSubmit={registerSubmit}>
       <div className="nameipt" >
       <label>Name</label>
        <input
          type="text"
          required
          placeholder="Name"
          value={user.name}
          name="name"
          onChange={onChangeInput}
        />
       </div>
        <div className="emailipt" >
        <label>Email</label>
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
       <label>Password</label>
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
          <button type="submit">Register</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
