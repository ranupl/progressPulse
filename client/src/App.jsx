import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Home';
import EmployeeDashboard from './dashboard/EmployeeDashboard';
import Leave from './components/Leave';
import MyTimeline from './components/MyTimeline';
import Tasks from './components/Task';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    const user = localStorage.getItem("user");
    return (
        <>
            <ToastContainer position='top-right' autoClose={2000} hideProgressBar transition={Slide} />
            <Routes>
                <Route path='/login' element={user ? <Navigate to="/" /> : <Home />} />
                <Route exact path="/" element={<ProtectedRoute element={<Layout />} />}>
                    <Route index element={<ProtectedRoute element={<EmployeeDashboard />} />} />
                    <Route path="timeline" element={<ProtectedRoute element={<MyTimeline />}  />} />
                    <Route path="leave" element={<ProtectedRoute element={<Leave />} />} />
                    <Route path="tasks" element={<ProtectedRoute element={<Tasks />} /> } />
                </Route>
            </Routes>
        </>
    )
}

export default App;
