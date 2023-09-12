import React from "react";

function LeaveCard({ date, type, reason }) {
    return (
        <div className="container">
            <div className="card card-margin-top">
                <h6>{date}</h6>
                <h6 className="text-info">{type}</h6>
                <p className="pd-0">{reason}</p>
            </div>
        </div>
    );
}

export default LeaveCard;