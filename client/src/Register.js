import React from "react";

const Register = () => {
    return (
        <div>
        <div className='container'>
                <div className='d-flex mg-top'>
                    <img src="/images/logo.png" alt='logo' className='logo' />&nbsp;&nbsp;
                    <h3 className='text-info font-family'>Progress Pulse</h3>
                </div>
            </div>
            <div  className="container bg-register">
            <div className="container">
                <h3 className="text-grey mg-top font-family text-center">Registration</h3>
                <form>
                <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">FirstName : -</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="FirstName" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">MiddleName : -</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="MiddleName" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">LastName : -</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="LastName" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email : -</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Username : -</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="Username" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Password : -</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-info text-white font-family">Sign in</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Register;