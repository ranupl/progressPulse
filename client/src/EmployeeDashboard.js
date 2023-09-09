import React from "react";
import { NavLink } from 'react-router-dom';
import CardList from './CardList';

const EmployeeDashboard = () => {

    const data = [
      { title: 'Card 1', content: 'Lorem ipsum 1' , color: 'red'},
      { title: 'Card 2', content: 'Lorem ipsum 2' , color: 'green'},
      { title: 'Card 3', content: 'Lorem ipsum 3' , color: 'blue'},
      { title: 'Card 3', content: 'Lorem ipsum 3' , color: 'pink'},
      { title: 'Card 3', content: 'Lorem ipsum 3' , color: 'orange'},
      { title: 'Card 3', content: 'Lorem ipsum 3' , color: 'yellow'},
      { title: 'Card 3', content: 'Lorem ipsum 3' , color: 'green'},
      { title: 'Card 3', content: 'Lorem ipsum 3' , color: 'white'},
      { title: 'Card 3', content: 'Lorem ipsum 3' , color: 'pink'},
      { title: 'Card 3', content: 'Lorem ipsum 3' , color: 'blue'},
      { title: 'Card 3', content: 'Lorem ipsum 3' , color: 'yellow'},
      { title: 'Card 3', content: 'Lorem ipsum 3' , color: 'red'},
      { title: 'Card 3', content: 'Lorem ipsum 3' , color: 'orange'},
    ];

    return (
        <>
            <div className="row">
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
                <div className="col-10">
                    <div className="container">
                        <div className='d-flex mg-top border-bottom'>
                            <img src="/images/list.png" alt="task" width="30px" height="30px " />&nbsp;&nbsp;
                            <h5 className='text-dark'>Dashboard</h5>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row border-bottom">
                            <h4 className="project">Projects</h4>
                        </div>
                    </div>
                    <div className="container mg-top">
                        <div className="d-flex">
                            <CardList data={data}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeDashboard;