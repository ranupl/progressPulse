import React, { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const EmployeeTable = ({ teamId }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState([]);
    const [employeeMapping, setEmployeeMapping] = useState({});
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        const savedEmployeeMapping = JSON.parse(localStorage.getItem("employeeMapping")) || {};
        setEmployeeMapping(savedEmployeeMapping);

        const token = localStorage.getItem("authToken");
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/getAllEmployee`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
                );
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem("employeeMapping", JSON.stringify(employeeMapping));
    }, [employeeMapping]);

    const handleMapping = async (employeeId) => {
        const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/teamEmployeeMap`,
            { team_id: teamId, employee_id: employeeId },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (result.status === 200) {
            toast.error("Member added successfully");
            setEmployeeMapping(prevMapping => ({
                ...prevMapping,
                [employeeId]: true,
            }));
        } else {
            toast.error("Something went wrong!");
        }
    }

    const handleRemoveMapping = async (employeeId) => {
        const result = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/deleteTeamEmployeeMap/${employeeId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        if (result.status === 200) {
            toast.error("Member removed successfully");
            setEmployeeMapping(prevMapping => ({
                ...prevMapping,
                [employeeId]: false,
            }));
        } else {
            toast.error("Something went wrong!");
        }
    }

    return (
        <>
            <button type="button" className="btn btn-color mb-2 text-white font" onClick={handleShow}>
                Add Members
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-color font-family fontHeading">Add Members</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="input-group mb-3">
                            <input type="search" className="form-control rounded" placeholder="Search" />
                            <button type="button" className="btn border btn-color text-white"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div>
                    </div>
                    <div className="bg-register">
                        <div className="container employee-list">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col" className="font">FirstName</th>
                                        <th scope="col" className="font">LastName</th>
                                        <th scope="col" className="font">Username</th>
                                        <th scope="col" className="font">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((employee, index) => (
                                        <tr key={index}>
                                            <td className="font">{employee.first_name}</td>
                                            <td className="font">{employee.last_name}</td>
                                            <td className="font">{employee.username}</td>
                                            <td>
                                                {employeeMapping[employee.id] ? (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveMapping(employee.id)}
                                                        className="btn btn-success font btn-size text-white"
                                                    >
                                                        Remove
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleMapping(employee.id)}
                                                        className="btn btn-danger font btn-size text-white"
                                                    >
                                                        Add
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EmployeeTable;
