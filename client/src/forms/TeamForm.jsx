import React from "react";
import { Modal } from 'react-bootstrap';
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const TeamForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [release_notes, setReleaseNotes] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/createTeam`, { title: title, description: description, release_notes: release_notes });

        if (result.status === 200) {
            toast.error("Team Created successfully");
        }
        else {
            toast.error("Something went wrong!");
        }
    }

    return (
        <>
            <button type="button" className="btn btn-color mg-btm text-white font" onClick={handleShow}>
                Create Team
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-color font-family">CreateTeam</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container bg-register">
                        <div className="container">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="form-group">
                                    <label for="title">Title</label>
                                    <input type="text" className="form-control" id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Enter title" required />
                                </div>
                                <div className="form-group">
                                    <label for="description">Description</label>
                                    <input type="text" className="form-control" id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Enter description" required />
                                </div>
                                <div className="form-group">
                                    <label for="notes">Release-Notes</label>
                                    <input type="text" className="form-control" id="notes"
                                        value={release_notes}
                                        onChange={(e) => setReleaseNotes(e.target.value)}
                                        placeholder="Enter notes" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TeamForm;