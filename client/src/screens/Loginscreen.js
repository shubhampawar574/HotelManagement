import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Loginscreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const login = async () => {
    const User = {
      email,
      password,
    };
    console.log(User);
    try {
      setLoading(true);
      const result = (await axios.post("/api/users/login", User)).data;
      setLoading(false);

      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/home";
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <>
      {/* {loading && <Loader />}
      {error && <Error message='Invalid credentials'/>} */}
      <div className="row justify-content-center mt-5 ">
        <div className="col-md-5 bs p-4">
          <h2>Login</h2>

          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <button className="btn btn-primary mt-2 " onClick={login}>
            {" "}
            Login
          </button>
          <div>
            <Link to="/register">Click here to Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginscreen;
