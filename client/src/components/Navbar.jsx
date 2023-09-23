import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRightFromBracket, faListCheck, faClock } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Navbar = ({ showText , expanded}) => {
    return (
        <>
            <div  className={`navbar ${expanded ? "expanded col-2 bg-color border" : "collapsed col-1 bg-color border"} bg-color`}>
                <div className='container bdr-btm'>
                    <div className='d-flex mg-top'>
                        <img src="/images/settings.png" alt='logo' className='logoDashboard' />&nbsp;
                        <h6 className='text-color font-family'>{showText && <span>ProgressPulse</span>}</h6>
                    </div>
                </div>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className="navlink nav-font font-family" activeClassName="active" exact><FontAwesomeIcon icon={faHouse} />&nbsp;{showText && <span>Dashboard</span>}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/timeline" className="navlink nav-font font-family" activeClassName="active"><FontAwesomeIcon icon={faClock} />&nbsp;{showText && <span>MyTimeline</span>}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/leave" className="navlink nav-font font-family" activeClassName="active"><FontAwesomeIcon icon={faRightFromBracket} />&nbsp;{showText && <span>Leaves</span>}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tasks" className="navlink nav-font font-family" activeClassName="active"><FontAwesomeIcon icon={faListCheck} />&nbsp;{showText && <span>MyTasks</span>}</NavLink>
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