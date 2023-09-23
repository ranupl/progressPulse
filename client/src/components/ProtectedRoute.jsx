import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({element}) => {
    const token = localStorage.getItem("authToken");
    if(token){
        return element;
    }
    return <Navigate to="/login" />
}
export default ProtectedRoute;