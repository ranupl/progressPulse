import React from "react";
import CardList from './CardList';
import Navbar from "./Navbar";
import Update from "./Update";

const EmployeeDashboard = () => {

    const data = [
        { title: 'Team A', content: 'Lorem ipsum 1', color: 'red' },
        { title: 'Team B', content: 'Lorem ipsum 2', color: 'green' },
        { title: 'Team C', content: 'Lorem ipsum 3', color: 'blue' },
        { title: 'Team D', content: 'Lorem ipsum 3', color: 'pink' },
        { title: 'Team E', content: 'Lorem ipsum 3', color: 'orange' },
        { title: 'Team F', content: 'Lorem ipsum 3', color: 'yellow' },
        { title: 'Team G', content: 'Lorem ipsum 3', color: 'green' },
        { title: 'Team H', content: 'Lorem ipsum 3', color: 'white' },
        { title: 'Team I', content: 'Lorem ipsum 3', color: 'pink' },
        { title: 'Team J', content: 'Lorem ipsum 3', color: 'blue' },
        { title: 'Team K', content: 'Lorem ipsum 3', color: 'yellow' },
        { title: 'Team L', content: 'Lorem ipsum 3', color: 'red' },
        { title: 'Team M', content: 'Lorem ipsum 3', color: 'orange' },
    ];

    return (
        <>
            <div className="row">
                <Navbar />
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
                            <CardList data={data} />
                        </div>
                    </div>
                    <div className="container">
                        <h6 className="mg-top font-family mg-left">My Updates For Today</h6>
                    </div>
                    <Update />
                </div>
            </div>
        </>
    )
}

export default EmployeeDashboard;