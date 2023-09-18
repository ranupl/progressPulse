import React from "react";
import { useState } from "react";

const Update = ({show}) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:7000/createProgress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ updates: e.target.updates.value }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error('Submission failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    return (
        <>
            <div className={`container ${show.update ? "show" : "hide"}`}  >
                <div className="row">
                    {isSubmitted ? (
                            <p className="text-success font-family">Update Successful</p>
                        ) : (
                            <div className="update-box">
                            <form onSubmit={handleSubmit}>
                                <textarea className="borderless-textarea" name="updates" placeholder="Enter text"></textarea>
                                <div className="d-flex">
                                    <button type='submit' className="btn btn-color float-right mg-top font-family float-right text-white">Update</button>
                                </div>
                            </form>
                            </div>
                        )}
                    
                </div>
            </div>
        </>
    )
}

export default Update;