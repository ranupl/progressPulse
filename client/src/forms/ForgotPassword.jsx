
import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import { toast } from "react-toastify";
import axios from "axios";

const ForgotPassword = () => {
    const [show, setShow] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true); 

    const handleClose = () => {
        setShow(false);
        setNewPassword("");
        setConfirmPassword("");
        setPasswordsMatch(true);
    };
    
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (newPassword === confirmPassword) {
           
            setNewPassword("");
            setConfirmPassword("");
            handleClose();
        } else {
            setPasswordsMatch(false);
        }
    };

    return (
        <>
            <a href="#!" onClick={handleShow} className="text-color d-flex justify-content-end para-font mb-2">Forgot password?</a>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-color font-family fontHeading">Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container bg-register">
                        <form onClick={handleSubmit}>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input type="email" className="form-control font-family" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                            </div>
                            <div className="form-group">
                                <label for="password">New Password</label>
                                <input type="password" className="form-control font-family" id="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label for="password">Confirm password</label>
                                <input type="password" className="form-control font-family" id="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                            </div>
                            {!passwordsMatch && <p className="text-danger">Passwords do not match.</p>}
                            <button type="submit" className="btn btn-color mb-2 mt-3 font-family font text-white">Reset</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default ForgotPassword;



