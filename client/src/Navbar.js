import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="col-2 border">
                <div className='container'>
                    <div className='d-flex mg-top border-bottom'>
                        <img src="/images/logo.png" alt='logo' className='logoDashboard' />&nbsp;&nbsp;
                        <h5 className='text-info font-family'>Progress Pulse</h5>
                    </div>
                </div>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/myTimeline" className="navlink"><img src="/images/timeline.png" alt="" className="text-dark" width="20px" height="20px" />&nbsp;My Timeline</NavLink>
                            </li>
                            <li>
                                <NavLink to="/leaves" className="navlink"><img src="/images/leave.png" alt="" className="text-dark" width="20px" height="20px" />&nbsp;Leaves</NavLink>
                            </li>
                            <li>
                                <NavLink to="/myTasks" className="navlink pd-btm"><img src="/images/task.png" alt="" className="text-dark" width="20px" height="20px" />&nbsp;My Tasks</NavLink>
                            </li>
                            <li className="pd-btm"></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar;