import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
import EmployeeDashboard from './EmployeeDashboard';
// import Register from './Register';
import Leave from './Leave';
import MyTimeline from './MyTimeline';
import Tasks from './Task';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
                <Route path="/MyTimeline" element={<MyTimeline />} />
                <Route path="/Leave" element={<Leave />} />
                <Route path="/Tasks" element={<Tasks />} />
            </Routes>
        </>
    )
}

export default App;