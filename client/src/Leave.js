import React from "react";
import AllLeaves from "./AllLeaves";

const Leave = () => {

    const data = [
        { date: '12/04/2023', type: 'sick', reason: 'visit to doctor' },
        { date: '12/04/2023', type: 'sick', reason: 'visit to doctor' },
        { date: '12/04/2023', type: 'sick', reason: 'visit to doctor' },
        { date: '12/04/2023', type: 'sick', reason: 'visit to doctor' },
        { date: '12/04/2023', type: 'sick', reason: 'visit to doctor' },
        { date: '12/04/2023', type: 'sick', reason: 'visit to doctor' },
        { date: '12/04/2023', type: 'sick', reason: 'visit to doctor' },
        { date: '12/04/2023', type: 'sick', reason: 'visit to doctor' },
        { date: '12/04/2023', type: 'sick', reason: 'visit to doctor' },
        { date: '12/04/2023', type: 'sick', reason: 'visit to doctor' },
    ];
    return (
        <>
            <div className="col-10">
                <div className="container">
                    <div className='d-flex mg-top border-bottom'>
                        <img src="/images/list.png" alt="task" width="30px" height="30px " />&nbsp;&nbsp;
                        <h5 className='text-dark'>Leaves</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-info mg-btm text-white font">ApplyLeave</button>
                        </div>
                    </div>
                </div>
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-5 leave-child mg-rgt">
                            <h6 className="text-grey">All Leaves</h6>
                            <div className="d-block">
                                <AllLeaves data={data} />
                            </div>
                        </div>
                        <div className="col-6 leave-child">
                            <div className="container">
                                <div className='d-flex mg-top border-bottom'>
                                    <img src="/images/user.png" alt="task" width="30px" height="30px " />&nbsp;&nbsp;
                                    <h5 className='text-dark'>Employee Name</h5>
                                </div>
                            </div>
                            <div className="leave-box">
                                <div className="d-flex justify-content-around box-pd">
                                    <div className="d-block">
                                        <h6 className="text-info text-center">5</h6>
                                        <p className="para-f-fmly">Sick</p>
                                    </div>
                                    <div className="d-block">
                                        <h6 className="text-info text-center">5</h6>
                                        <p className="para-f-fmly">Casual</p>
                                    </div>
                                    <div className="d-block">
                                        <h6 className="text-info text-center">5</h6>
                                        <p className="para-f-fmly">Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leave;