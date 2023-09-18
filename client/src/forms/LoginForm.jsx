import React, { useState } from "react";
import Register from "./Register";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");

	const handleSubmit = async (e) =>{
		e.preventDefault();
		const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`,{email:email,password:password});
        console.log(result);
		if(result.status === 200){
            if(result?.data?.employee){
                const user = result?.data?.employee;
                localStorage.setItem("user",JSON.stringify(user));
                navigate('/');
            }else{
                toast.error(result?.data?.error);
            }
        }else{
            toast.error("Something went wrong!");
        }	
	}

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
                    onChange={(e) => setPassword(e.target.value)}className="form-control" />
                </div>
                <div className="row mb-2 d-flex">
                    <a href="#!" className="text-color d-flex justify-content-end para-font mb-2">Forgot password?</a>
                </div>
                <div className="form-outline mb-1">
                    <button type="submit" className="form-control login-btn text-white mb-2">Login</button>
                </div>
                <div className="text-center">
                    <Register />
                </div>
            </form>
        </>
    )
}

export default LoginForm;