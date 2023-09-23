import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import EmployeeDashboard from './dashboard/EmployeeDashboard';
import Leave from './components/Leave';
import MyTimeline from './components/MyTimeline';
import Tasks from './components/Task';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from "react";

const App = () => {
    const token = localStorage.getItem("authToken");
    const [showText, setShowText] = useState(true);
    const [expanded, setExpanded] = useState(true);
    const [dashwidth, setDashwidth] = useState(true);

    const toggleTextVisibility = () => {
        setShowText(!showText);
        setExpanded(!expanded);
        setDashwidth(!dashwidth);
    };
    return (
        <>
            <ToastContainer position='top-right' autoClose={3000} hideProgressBar transition={Slide} />
            <Routes>
                <Route path='/login' element={token ? <Navigate to="/" /> : <Home />} />
                <Route exact path="/" element={<ProtectedRoute element={<Layout showText={showText} expanded={expanded}/>} />}>
                    <Route index element={<ProtectedRoute element={<EmployeeDashboard toggleTextVisibility={toggleTextVisibility} dashwidth={dashwidth}/>} />} />
                    <Route path="timeline" element={<ProtectedRoute element={<MyTimeline toggleTextVisibility={toggleTextVisibility} dashwidth={dashwidth}/>} />} />
                    <Route path="leave" element={<ProtectedRoute element={<Leave toggleTextVisibility={toggleTextVisibility} dashwidth={dashwidth} />} />} />
                    <Route path="tasks" element={<ProtectedRoute element={<Tasks toggleTextVisibility={toggleTextVisibility} dashwidth={dashwidth}/>} />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;
