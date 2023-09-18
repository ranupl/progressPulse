import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

function TimelineCard({ created, modified, updates }) {
    const c_date = new Date(created);
    const m_date = new Date(modified);
    const cyear = c_date.getFullYear();
    const cmonth = (c_date.getMonth() + 1).toString().padStart(2, '0');
    const cday = c_date.getDate().toString().padStart(2, '0');
    const myear = m_date.getFullYear();
    const mmonth = (m_date.getMonth() + 1).toString().padStart(2, '0');
    const mday = m_date.getDate().toString().padStart(2, '0');
    return (
        <div className="container">
            <div className="card card-margin-top">
                <h6 className="font-set">Updated at : {`${cyear}-${cmonth}-${cday}`}</h6>
                <h6 className="font-set">Modified at :{`${myear}-${mmonth}-${mday}`}</h6>
                <p className="pd-0 font-update font-family">Updates : {updates}</p>
                 <div className="d-flex pencil justify-content-end">
                                <FontAwesomeIcon icon={faPencil} />
                                </div>
            </div>
        </div>
    );
}

export default TimelineCard;