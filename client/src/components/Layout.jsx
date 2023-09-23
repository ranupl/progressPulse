import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = ({ showText , expanded}) => {
    return   (
        <div className="row">
            <Navbar showText={showText} expanded={expanded}/>
            <Outlet />
        </div>
    )
}
export default Layout;