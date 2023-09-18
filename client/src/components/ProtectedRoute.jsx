import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({element}) => {
    const user = localStorage.getItem("user");
    if(user){
        return element;
    }
    return <Navigate to="/login" />
}
export default ProtectedRoute;