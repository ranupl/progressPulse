import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

const Tasks = ({ toggleTextVisibility, dashwidth }) => {
    return (
        <>
            <div  className={`${dashwidth ? "dashexpand col-10" : "dashcollapse col-11"}`}>
                <div className="container">
                    <div className='d-flex mg-top border-bottom'>
                    <FontAwesomeIcon icon={faList} onClick={toggleTextVisibility}/>&nbsp;&nbsp;
                        <h6 className='text-dark font-family'>Tasks</h6>
                    </div>
                </div>
                <div className="container mg-top">
                    <div className="d-flex">
                        {/* <LeaveList data={data} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasks;