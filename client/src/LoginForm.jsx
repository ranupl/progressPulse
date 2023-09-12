import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';

const LoginForm = () => {
    return (
        <>
            <form>
                <div class="form-outline mb-1">
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label label-font" for="form2Example1">Email address</label>
                </div>
                <div class="form-outline mb-1">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label label-font" for="form2Example2">Password</label>
                </div>
                <div class="row mb-2 d-flex">
                    <a href="#!" className="text-info d-flex justify-content-end">Forgot password?</a>
                </div>
                <button type="button" class="btn btn-info text-white btn-block mb-2">Sign in</button>
                <div class="text-center">
                    <p className="para-font">Not a member? <a href="#!" className="text-info">Register</a></p>
                    <span className="para-font">or sign up with:</span>
                    <button type="button" class="btn btn-link btn-floating mx-1">
                    <img src="images/google.png" alt="" width="55px" height="20px"/>
                    </button>
                </div>
            </form>
        </>
    )
}

export default LoginForm;