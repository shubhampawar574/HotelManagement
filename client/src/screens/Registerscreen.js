import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Loader from "../components/Loader";
// import Error from "../components/Error";
// import Success from "../components/Success";

const Registerscreen = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  // const [success, setsuccess] = useState();

  const register = async () => {
    if (password === cpassword) {
      const User = {
        name,
        email,
        password,
        cpassword,
      };
      console.log(User);
      try {
        setloading(true);
        const result = (await axios.post("/api/users/register", User)).data;
        setloading(false);
        // setsuccess(true);

        setname("");
        setemail("");
        setpassword("");
        setcpassword("");
      } catch (err) {
        console.log(err);
        setloading(false);
        seterror(true);
      }
    } else {
      alert("Passwords not matched.");
    }
  };

  return (
    <>
      {/* {loading && <Loader />}
      {error && <Error message='Invalid credentials'/>} */}
      <div className="row justify-content-center mt-5 ">
        <div className="col-md-5 bs p-4">
          {/* {success && <Success message="Registration Success" />} */}
          <h2>Register</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
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
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => {
              setcpassword(e.target.value);
            }}
          />

          <button className="btn btn-primary mt-2 " onClick={register}>
            {" "}
            Register
          </button>
          <div>
            <Link to="/login">Click here to Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registerscreen;
