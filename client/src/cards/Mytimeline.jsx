import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function TimelineCard({id, created, modified, updates , onUpdate}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProgress, setUpdatedProgress] = useState(updates);

  const c_date = new Date(created);
  const m_date = new Date(modified);
  const cyear = c_date.getFullYear();
  const cmonth = (c_date.getMonth() + 1).toString().padStart(2, '0');
  const cday = c_date.getDate().toString().padStart(2, '0');
  const myear = m_date.getFullYear();
  const mmonth = (m_date.getMonth() + 1).toString().padStart(2, '0');
  const mday = m_date.getDate().toString().padStart(2, '0');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedProgress(updates);
  };

  const handleUpdateClick = () => {
    onUpdate(id, updatedProgress);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="card card-margin-top">
        <h6 className="font-set"><span className="text-color">Updated at:</span> {`${cyear}-${cmonth}-${cday}`}</h6>
        <h6 className="font-set"><span className="text-color">Modified at:</span> {`${myear}-${mmonth}-${mday}`}</h6>
        
        {isEditing ? (
          <div>
            <textarea
              rows="4"
              cols="40"
              value={updatedProgress}
              className="text-padding"
              onChange={(e) => setUpdatedProgress(e.target.value)}
            />
            <button className="btn btn-success font text-white" onClick={handleUpdateClick}>Update</button>&nbsp;
            <button className="btn btn-danger font text-white" onClick={handleCancelClick}>Cancel</button>
          </div>
        ) : (
          <>
            <p className="pd-0 font-update font-family"><span className="text-success font-family">Updates : </span> {updates}</p>
            <div className="d-flex pencil justify-content-end">
              <FontAwesomeIcon icon={faPencil} onClick={handleEditClick} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TimelineCard;
