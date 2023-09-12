import React from "react";

const Tasks = () => {
    return (
        <>
            <div className="col-10">
                <div className="container">
                    <div className='d-flex mg-top border-bottom'>
                        <img src="/images/list.png" alt="task" width="30px" height="30px " />&nbsp;&nbsp;
                        <h5 className='text-dark'>Tasks</h5>
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