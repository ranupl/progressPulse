import React from "react";

const LeaveApply = () => {
    return (
        <>
            <div className='container'>
                <div className='d-flex mg-top'>
                    <img src="/images/logo.png" alt='logo' className='logo' />&nbsp;&nbsp;
                    <h3 className='text-info font-family'>Progress Pulse</h3>
                </div>
            </div>
            <div className="container bg-register">
                <div className="container">
                    <h3 className="text-grey mg-top font-family text-center">Apply Leave</h3>
                    <form>
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">No Of Days : -</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" placeholder="No. of days" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" for="inlineFormCustomSelectPref">Type : -</label>
                            <div className="col-sm-10">
                                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" className="form-control" >
                                    <option selected>Choose...</option>
                                    <option value="1">Sick</option>
                                    <option value="2">Casual</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Reason : -</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3" placeholder="Reason" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Start-Date : -</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" id="inputEmail3" placeholder="Start date" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">End-Date : -</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" id="inputEmail3" placeholder="End date" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-info text-white font-family">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LeaveApply;