import React, { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';
import { toast } from "react-toastify";
import axios from "axios";
import jwt_decode from "jwt-decode";

const LeaveApply = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [tempMessage, setTempMessage] = useState("");

    const [no_of_days, setDays] = useState("");
    const [type, setType] = useState("");
    const [reason, setReason] = useState("");
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [totalLeave, setTotalLeave] = useState(0);

    const token = localStorage.getItem("authToken");
    var decodedHeader = jwt_decode(token);
    const employeeId = decodedHeader.employee.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/getLeaveById/${employeeId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const totalLeaveValue = response.data.leave[0].total;
                setTotalLeave(totalLeaveValue);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [employeeId]);

    function calculateWeekdays() {
        if (start_date && end_date) {
            const start = new Date(start_date);
            const end = new Date(end_date);

            let weekdays = 0;
            while (start <= end) {
                if (start.getDay() !== 0 && start.getDay() !== 6) {
                    weekdays++;
                }
                start.setDate(start.getDate() + 1);
            }

            setDays(weekdays);
        }
    }

    useEffect(() => {
        calculateWeekdays();
    }, [start_date, end_date]);

    const handleBlur = () => {
        if (no_of_days > totalLeave) {
            setTempMessage("Total weekdays exceed your total leave balance.");
        } else {
            setTempMessage("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (no_of_days <= totalLeave) {
            const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/createLeaveApply`, 
            { no_of_days: no_of_days, type: type, reason: reason, start_date: start_date, end_date: end_date, totalLeave: totalLeave, },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
            );
            if (result.status === 200) {
                if (result?.data?.allLeave) {
                    toast.error("Leave Applied successfully");
                }
            } else {
                toast.error("Something went wrong!");
            }
        } else {
            toast.error("Leave Application failed");
        }
    };

    return (
        <>
            <button type="button" className="btn btn-color mg-btm text-white font" onClick={handleShow}>
                ApplyLeave
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-color font-family fontHeading">Apply Leave</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container bg-register">
                        <div className="container">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label inputFont font-family lb-f-size">Start-Date</label>
                                    <div className="col-sm-10">
                                        <input type="date" className="form-control f-size modal-margin" id="inputEmail3" name="start_date"
                                            value={start_date}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            placeholder="Start date" required />
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label inputFont font-family lb-f-size">End-Date</label>
                                    <div className="col-sm-10">
                                        <input type="date" className="form-control f-size modal-margin" id="inputEmail3" name="end_date"
                                            value={end_date}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            placeholder="End date" required />
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label className="col-sm-2 col-form-label font-family inputFont lb-f-size" for="inlineFormCustomSelectPref">Type</label>
                                    <div className="col-sm-10">
                                        <select id="inlineFormCustomSelectPref" name="type"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                            className="form-control f-size modal-margin" required>
                                            <option selected><span className="text-grey inputFont">Choose...</span></option>
                                            <option value="1">Sick</option>
                                            <option value="2">Casual</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label font-family lb-f-size inputFont">No Of Days</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control f-size modal-margin" id="inputEmail3" name="no_of_days"
                                            value={no_of_days}
                                            onChange={(e) => setDays(e.target.value)}
                                            onBlur={handleBlur}
                                            placeholder="No. of days" required />
                                        <div className="text-danger font modal-margin">{tempMessage}</div>
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label font-family inputFont lb-f-size">Reason</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control f-size modal-margin" id="inputEmail3" name="reason"
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}
                                            placeholder="Reason" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <button type="submit" onClick={handleClose}
                                            className="btn btn-color font text-white font-family">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LeaveApply;