import React from "react";
import { Modal } from 'react-bootstrap';
import { useState } from "react";

const LeaveApply = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button type="button" className="btn btn-info mg-btm text-white font" onClick={handleShow}>
                ApplyLeave
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-info">Apply Leave</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container bg-register">
                        <div className="container">
                            <form>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label">No Of Days :</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputEmail3" placeholder="No. of days" />
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label className="col-sm-2 col-form-label" for="inlineFormCustomSelectPref">Type :</label>
                                    <div className="col-sm-10">
                                        <select id="inlineFormCustomSelectPref" className="form-control" >
                                            <option selected>Choose...</option>
                                            <option value="1">Sick</option>
                                            <option value="2">Casual</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label">Reason :</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputEmail3" placeholder="Reason" />
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label">Start-Date :</label>
                                    <div className="col-sm-10">
                                        <input type="date" className="form-control" id="inputEmail3" placeholder="Start date" />
                                    </div>
                                </div>
                                <div className="form-group d-flex">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label">End-Date :</label>
                                    <div className="col-sm-10">
                                        <input type="date" className="form-control" id="inputEmail3" placeholder="End date" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-info text-white font-family">Submit</button>
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