import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRightFromBracket, faListCheck, faClock } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="col-2 border bg-color">
                <div className='container'>
                    <div className='d-flex mg-top border-bottom'>
                        <img src="/images/settings.png" alt='logo' className='logoDashboard' />&nbsp;
                        <h5 className='text-color font-family'>ProgressPulse</h5>
                    </div>
                </div>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className="navlink" activeClassName="active" exact><FontAwesomeIcon icon={faHouse} />&nbsp;<span>Dashboard</span></NavLink>
                            </li>
                            <li>
                                <NavLink to="/timeline" className="navlink" activeClassName="active"><FontAwesomeIcon icon={faClock} />&nbsp;<span>MyTimeline</span></NavLink>
                            </li>
                            <li>
                                <NavLink to="/leave" className="navlink" activeClassName="active"><FontAwesomeIcon icon={faRightFromBracket} />&nbsp;<span>Leaves</span></NavLink>
                            </li>
                            <li>
                                <NavLink to="/tasks" className="navlink" activeClassName="active"><FontAwesomeIcon icon={faListCheck} />&nbsp;<span>MyTasks</span></NavLink>
                            </li>
                            <li className=" navlink pd-btm"></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar;