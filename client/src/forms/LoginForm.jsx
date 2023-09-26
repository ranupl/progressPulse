import React, { useState } from "react";
import Register from "./Register";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "../forms/ForgotPassword";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {
        email: email,
        password: password,
      });
      if (result.status === 200) {
        if (result?.data?.token) {
          const token = result.data.token;
          console.log(token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          localStorage.setItem("authToken", token);
          navigate('/');
        } else {
          toast.error(result?.data?.error);
        }
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error("Error in login:", error);
      if (error.response) {
        console.error("Server error:", error.response.data);
        toast.error("Server error. Please try again later.");
      } else if (error.request) {
        console.error("Network error:", error.request);
        toast.error("Network error. Please check your internet connection.");
      } else {
        console.error("Other error:", error.message);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} >
        <div className="align-center mb-3">
          <div className="br-wt">
            <button type="button" className="btn btn-floating mx-1">
              <img src="images/google.png" alt="" width="20px" height="20px" />
              &nbsp; &nbsp;<span className="para-font">Login with google</span>
            </button>
          </div>
        </div>
        <h3 className='form-outline mb-1'>Get Started Now</h3>
        <p className="para-font">Enter your credentials to access your account</p>
        <div className="form-outline mb-1">
          <label className="form-label label-font" htmlFor="email">Email address</label>
          <input type="email" id="email" name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control" />
        </div>
        <div className="form-outline mb-1">
          <label className="form-label label-font" htmlFor="password">Password</label>
          <input type="password" id="password" name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} className="form-control" />
        </div>
        <div className="row mb-2 d-flex">
          <ForgotPassword />
        </div>
        <div className="form-outline mb-1">
          <button type="submit" className="form-control login-btn mb-2">Login</button>
        </div>
        <div className="text-center">
          <Register />
        </div>
      </form>
    </>
  )
}

export default LoginForm;