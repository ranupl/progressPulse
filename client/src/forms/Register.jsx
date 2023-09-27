import React from "react";
import { Modal } from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/createEmployee`,
            { first_name: firstname, middle_name: middlename, last_name: lastname, email: email, username: username, password: password });
        if (result.status === 200) {
            if (result?.data?.employee) {
                toast.success("successfully registered");
                navigate('/');
            } 
        } else {
            toast.error("Something went wrong!");
        }
    }

    return (
        <>
            <p className="para-font justify-content-end"><a href="#!" className="text-color" onClick={handleShow}>Add Employee</a></p>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-color font-family fontHeading">Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container bg-register">
                        <div className="container">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label lb-f-size font-family">FirstName</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control font-family f-size modal-margin" name="first_name"
                                            value={firstname}
                                            onChange={(e) => setFirstname(e.target.value)}
                                            placeholder="FirstName" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label font-family lb-f-size">MiddleName</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control font-family f-size modal-margin" name="middle_name" value={middlename}
                                            onChange={(e) => setMiddlename(e.target.value)} placeholder="MiddleName" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label font-family lb-f-size">LastName</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control font-family f-size modal-margin" name="last_name"
                                            value={lastname}
                                            onChange={(e) => setLastname(e.target.value)}
                                            placeholder="LastName" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label font-family lb-f-size">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control font-family f-size modal-margin"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label font-family lb-f-size">Username</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control font-family f-size modal-margin" name="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Username" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label font-family lb-f-size">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control font-family f-size modal-margin"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-color text-white font font-family">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        </>
    );
}

export default Register;