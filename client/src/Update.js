import React from "react";

const Update = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="update-box">
                        <textarea class="borderless-textarea" placeholder="Enter text"></textarea>
                        <div className="d-flex justify-content-between float-right">
                            <button className="btn btn-info mg-top font-family float-right text-dark">update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update;