import React from "react";
import { Modal } from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LeaveApply = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const [no_of_days, setDays] = useState("");
	const [type, setType] = useState("");
	const [reason, setReason] = useState("");
	const [start_date, setStartDate] = useState("");
	const [end_date, setEndDate] = useState("");

	const handleSubmit = async (e) =>{
		e.preventDefault();
		const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/createLeaveApply`,{no_of_days:no_of_days, type: type, reason : reason, start_date: start_date, end_date:end_date});
        console.log(result);
		if (result.status === 200) {
            if (result?.data?.employee) {
                toast.success("Leave Applied successfull");
                navigate('/');
            } 
        } else {
            toast.error("Something went wrong!");
        }	
	}

    return (
        <>
            <button type="button" className="btn btn-color mg-btm text-white font" onClick={handleShow}>
                ApplyLeave
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-color font-family">Apply Leave</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container bg-register">
                        <div className="container">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label font-family lb-f-size">No Of Days</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control f-size modal-margin" id="inputEmail3" name="no_of_days" 
                                        value={no_of_days}
                                        onChange={(e) => setDays(e.target.value)}
                                        placeholder="No. of days" />
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label className="col-sm-2 col-form-label font-family lb-f-size" for="inlineFormCustomSelectPref">Type</label>
                                    <div className="col-sm-10">
                                        <select id="inlineFormCustomSelectPref" name="type" 
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        className="form-control f-size modal-margin" >
                                            <option selected>Choose...</option>
                                            <option value="1">Sick</option>
                                            <option value="2">Casual</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label font-family lb-f-size">Reason</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control f-size modal-margin" id="inputEmail3" name="reason"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        placeholder="Reason" />
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label font-family lb-f-size">Start-Date</label>
                                    <div className="col-sm-10">
                                        <input type="date" className="form-control f-size modal-margin" id="inputEmail3" name="start_date"
                                        value={start_date}
                                        onChange={(e) => setStartDate(e.target.value)} 
                                        placeholder="Start date" />
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label font-family lb-f-size">End-Date</label>
                                    <div className="col-sm-10">
                                        <input type="date" className="form-control f-size modal-margin" id="inputEmail3" name="end_date"
                                        value={end_date}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        placeholder="End date" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-color text-white font-family">Submit</button>
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