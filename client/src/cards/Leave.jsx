import React from "react";

function LeaveCard({ sdate, edate, type, days, reason, status }) {
    const start_date = new Date(sdate);
    const end_date = new Date(edate);
    const syear = start_date.getFullYear();
    const smonth = (start_date.getMonth() + 1).toString().padStart(2, '0');
    const sday = start_date.getDate().toString().padStart(2, '0');
    const eyear = end_date.getFullYear();
    const emonth = (end_date.getMonth() + 1).toString().padStart(2, '0');
    const eday = end_date.getDate().toString().padStart(2, '0');
    return (
        <div className="container">
            <div className="card card-margin-top">
                <div className="d-flex">
                    <h6 className="font-set"><span className="text-color">Start-date : </span> {`${syear}-${smonth}-${sday}`}</h6>&nbsp;&nbsp;&nbsp;
                    <h6 className="font-set"><span className="text-color">End-date : </span>  {`${eyear}-${emonth}-${eday}`}</h6>
                </div>
                <div className="d-flex">
                    <h6 className="text-info teamFont mg-right">{type}</h6>
                    <h6 className="teamFont mg-right"><span className="text-warning">Days :</span> {days} </h6>
                    <h6 className="teamFont"><span className="text-success">Status :</span> {status} </h6>
                </div>
                <p className="pd-0 font-update"><span className="text-danger">Reason :</span> {reason}</p>
            </div>
        </div>
    );
}

export default LeaveCard;