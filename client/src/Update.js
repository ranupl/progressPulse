import React from "react";

const Update = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="update-box">
                        <textarea class="borderless-textarea" placeholder="Enter text"></textarea>
                        <div className="d-flex">
                            <button className="btn btn-info float-right mg-top font-family float-right text-white">update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update;