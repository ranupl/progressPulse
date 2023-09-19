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
        <h6 className="font-set">Updated at: {`${cyear}-${cmonth}-${cday}`}</h6>
        <h6 className="font-set">Modified at: {`${myear}-${mmonth}-${mday}`}</h6>
        
        {isEditing ? (
          <div>
            <textarea
              rows="4"
              cols="50"
              value={updatedProgress}
              onChange={(e) => setUpdatedProgress(e.target.value)}
            />
            <button onClick={handleUpdateClick}>Update</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        ) : (
          <>
            <p className="pd-0 font-update font-family">Updates : {updates}</p>
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
