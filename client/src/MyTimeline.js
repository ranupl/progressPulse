import React from "react";
import Navbar from "./Navbar";

const MyTimeline = () => {
    return (
        <>
        <div className="row">
                <Navbar />
                <div className="col-10">
                    <div className="container">
                        <div className='d-flex mg-top border-bottom'>
                            <img src="/images/list.png" alt="task" width="30px" height="30px " />&nbsp;&nbsp;
                            <h5 className='text-dark'>MyTimeline</h5>
                        </div>
                    </div>
                    <div className="container mg-top">
                        <div className="d-flex">
                            {/* <LeaveList data={data} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyTimeline;