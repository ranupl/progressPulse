import React from "react";
import { Modal } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EmployeeTable = ({teamId}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
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

    
    const handleMapping = async (employeeId) => {
        const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/teamEmployeeMap`,
            { team_id: teamId, employee_id: employeeId});

        if (result.status === 200) {
            toast.error("Member added successfully");
        } else {
            toast.error("Something went wrong!");
        }
    }

    return (
        <>
            <button type="button" className="btn btn-color mg-btm text-white font" onClick={handleShow}>
                Add Members
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-color font-family">Add Members</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="bg-register">
                        <div className="container border">
                            <table className="table table-striped employee-list">
                                <thead>
                                    <tr>
                                        <th scope="col" className="font">FirstName</th>
                                        <th scope="col" className="font">LastName</th>
                                        <th scope="col" className="font">Username</th>
                                        <th scope="col" className="font">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((data, index) => (
                                        <tr key={index}>
                                            <td className="font">{data.first_name}</td>
                                            <td className="font">{data.last_name}</td>
                                            <td className="font">{data.username}</td>
                                            <td><button type="button" onClick={() => handleMapping(data.id)} className={`btn btn-danger font btn-size text-white`}>Add</button>
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