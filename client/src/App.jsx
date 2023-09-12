import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
import EmployeeDashboard from './EmployeeDashboard';
// import Register from './Register';
import Leave from './Leave';
import MyTimeline from './MyTimeline';
import Tasks from './Task';
import Navbar from './Navbar';
// import LeaveApply from './LeaveApply';

const App = () => {
    return (
        <>
        {/* <LeaveApply /> */}
        <div className="row">
            <Navbar />
            <Routes>
                <Route path="/" element={<EmployeeDashboard />} />
                <Route path="/MyTimeline" element={<MyTimeline />} />
                <Route path="/Leave" element={<Leave />} />
                <Route path="/Tasks" element={<Tasks />} />
            </Routes>
            </div>
        </>
    )
}

export default App;