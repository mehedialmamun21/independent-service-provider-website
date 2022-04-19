import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  const handleRegister = (event) => {
    event.preventDefault();
    // console.log(event.target.email.value);
    const name = event.target.password.value;
    console.log(name);
  };
  return (
    <div className="register-form">
      <h2 style={{textAlign: "center"}}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="your name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="email address"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account?
        <Link
          to={"/login"}
          className="text-danger text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
