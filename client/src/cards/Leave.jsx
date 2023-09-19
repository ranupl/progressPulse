import React from "react";

function LeaveCard({ sdate, edate, type, days, reason, status }) {
    const start_date = new Date(sdate);
    const end_date =  new Date(edate);
    const syear = start_date.getFullYear();
    const smonth = (start_date.getMonth() + 1).toString().padStart(2, '0'); 
    const sday = start_date.getDate().toString().padStart(2, '0');
    const eyear = end_date.getFullYear();
    const emonth = (end_date.getMonth() + 1).toString().padStart(2, '0'); 
    const eday = end_date.getDate().toString().padStart(2, '0');
    return (
        <div className="container">
            <div className="card card-margin-top">
                <h6 className="font-set">Start-date : {`${syear}-${smonth}-${sday}`}</h6>
                <h6 className="font-set">End-date :  {`${eyear}-${emonth}-${eday}`}</h6>
                <h6 className="text-info font-update">{type}</h6>
                <h6 className="font-update">Days : {days} </h6>
                <h6 className="font-update text-danger">Status : {status} </h6>
                <p className="pd-0 font-update">Reason: {reason}</p>
            </div>
        </div>
    );
}

export default LeaveCard;