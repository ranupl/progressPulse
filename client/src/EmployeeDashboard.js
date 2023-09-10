import React from "react";
import CardList from './CardList';
import Navbar from "./Navbar";
import Update from "./Update";

const EmployeeDashboard = () => {

    const data = [
        { title: 'Team A', content: 'Lorem ipsum 1', color: '#FF9B82' },
        { title: 'Team B', content: 'Lorem ipsum 2', color: '#EBEF95' },
        { title: 'Team C', content: 'Lorem ipsum 3', color: '#DAD4B5' },
        { title: 'Team D', content: 'Lorem ipsum 3', color: '#CEDEBD' },
        { title: 'Team E', content: 'Lorem ipsum 3', color: '#B9B4C7' },
        { title: 'Team F', content: 'Lorem ipsum 3', color: '#EAC696' },
        { title: 'Team G', content: 'Lorem ipsum 3', color: '#91C8E4' },
        { title: 'Team H', content: 'Lorem ipsum 3', color: '#557A46' },
        { title: 'Team I', content: 'Lorem ipsum 3', color: '#FF90BB' },
        { title: 'Team J', content: 'Lorem ipsum 3', color: '#D3D04F' },
        { title: 'Team K', content: 'Lorem ipsum 3', color: '#CEDEBD' },
        { title: 'Team L', content: 'Lorem ipsum 3', color: '#EBEF95' },
        { title: 'Team M', content: 'Lorem ipsum 3', color: '#FF9B82' },
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