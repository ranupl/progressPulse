import React from "react";
import { useState, useEffect } from "react";
import AllLeaves from "../cardLists/LeaveList";
import LeaveApply from "../forms/LeaveApply";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import jwt_decode from "jwt-decode";

const Leave = ({ toggleTextVisibility, dashwidth }) => {
    const token = localStorage.getItem("authToken");
    var decodedHeader = jwt_decode(token);
    const employeeId = decodedHeader.employee.id;
    
    const [data, setData] = useState([]);
    const [sickLeaveData, setSickLeaveData] = useState(0);
    const [casualLeaveData, setCasualLeaveData] = useState(0);
    const [totalLeaveData, setTotalLeaveData] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(
                `${process.env.REACT_APP_SERVER_URL}/getLeaveApplyById/${employeeId}`
              );
              setData(response.data.allLeave);
            } catch (error) {
              console.log(error);
            }
          };
          fetchData();
    }, [employeeId]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(
                `${process.env.REACT_APP_SERVER_URL}/getLeaveById/${employeeId}`
              );
              const sickLeave = response.data.leave[0].sick;
              const casualLeave = response.data.leave[0].casual;
              const totalLeave = response.data.leave[0].total;
              setSickLeaveData(sickLeave);
              setCasualLeaveData(casualLeave);
              setTotalLeaveData(totalLeave);
            } catch (error) {
              console.log(error);
            }
          };
          fetchData();
    }, [employeeId]);

    return (
        <>
             <div  className={`${dashwidth ? "dashexpand col-10" : "dashcollapse col-11"}`}>
                <div className="container">
                    <div className='d-flex mg-top border-bottom'>
                    <FontAwesomeIcon icon={faList} onClick={toggleTextVisibility}/>&nbsp;&nbsp;
                        <h6 className='text-dark  font-family'>Leaves</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end">
                            <LeaveApply />
                        </div>
                    </div>
                </div>
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-5 leave-child mg-rgt">
                            <h6 className="text-grey font-family">All Leaves</h6>
                            <div className="d-block">
                                <AllLeaves data={data} />
                            </div>
                        </div>
                        <div className="col-6 leave-child">
                            <div className="container">
                                <div className='d-flex mg-top border-bottom'>
                                    <img src="/images/user (1).png" alt="task" width="35px" height="35px " />&nbsp;&nbsp;
                                    <h5 className='text-dark font-family mt-1'>Employee Name</h5>
                                </div>
                            </div>
                            <div className="leave-box">
                                <div className="d-flex justify-content-around box-pd">
                                    <div className="d-block">
                                        <h6 className="text-info text-center">{sickLeaveData}</h6>
                                        <p className="para-f-fmly">Sick</p>
                                    </div>
                                    <div className="d-block">
                                        <h6 className="text-info text-center">{casualLeaveData}</h6>
                                        <p className="para-f-fmly">Casual</p>
                                    </div>
                                    <div className="d-block">
                                        <h6 className="text-info text-center">{totalLeaveData}</h6>
                                        <p className="para-f-fmly">Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leave;