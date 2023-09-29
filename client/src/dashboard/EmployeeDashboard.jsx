import React from "react";
import CardList from '../cardLists/TeamList';
import Team from "../components/Team";
import LeaveTable from "../components/LeaveTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import Update from "../forms/Update";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import TeamForm from "../forms/TeamForm";
import TeamMember from "../components/TeamMember";
import Register from "../forms/Register";

const EmployeeDashboard = ({ toggleTextVisibility, dashwidth }) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [teamId, setTeamID] = useState("");
    const [show, setShow] = useState({
        update: true,
        teams: false,
        member: false,
    });
    const token = localStorage.getItem("authToken");
    var decodedHeader = jwt_decode(token);
    const username = decodedHeader.employee.username;
    const designation = decodedHeader.employee.designation;

    useEffect(() => {
        const predefinedColors = [
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(35,67,80,1) 35%, rgba(0,212,255,1) 100%)',
            'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
            'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(105,62,62,1) 50%, rgba(252,176,69,1) 100%)',
            'linear-gradient(90deg, rgba(58,86,180,1) 0%, rgba(105,99,62,1) 50%, rgba(252,69,117,1) 100%)'];

        axios.get("http://localhost:7000/getAllTeam",
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                const responseData = response.data;
                const dataWithColors = responseData.map((item, index) => ({
                    ...item,
                    color: predefinedColors[index % predefinedColors.length],
                }));
                setData(dataWithColors);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const cardHandleClick = (id) => {
        setTeamID(id);
        setShow((prevState) => ({
            ...prevState,
            teams: true,
            update: false,
            member: false,
        }));
    }

    function handleLogout() {
        localStorage.removeItem("authToken");
        navigate("/login");
    }

    return (
        <>
            <div className={`${dashwidth ? "dashexpand col-10" : "dashcollapse col-11"}`}>
                <div className="container">
                    <div className='d-flex mg-top border-bottom justify-content-between'>
                        <div className="d-flex cursor-pointer bold"> <FontAwesomeIcon icon={faList} onClick={toggleTextVisibility} />&nbsp;&nbsp;
                            <h6 className='text-dark bold font-family'>Dashboard</h6></div>
                        {/* dropdown */}
                        <div className="dropdown">
                            <span className="text-color d-flex capital cursor-pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/images/user (1).png" width="21px" height="21px" alt="" />&nbsp;
                                <p className="font-family teamFont text-color">{username}</p>
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item font-family text-color teamFont" href="#" onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </div>
                        {/* dropdown */}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <h4 className="project font-family font">Projects/Teams</h4>
                    </div>
                </div>
                <div className="container mg-top">
                    <div className="d-flex">
                        <CardList data={data} handleClick={cardHandleClick} />
                    </div>
                </div>
                <div className="container">
                    <h6 className="mg-top font-family text-color teamFont mb-4">My Updates For Today</h6>
                </div>
                <div className="container">
                    {designation === "hr" && <Register />}
                </div>
                <div className="container">
                    {designation === "manager" && <TeamForm />}
                </div>
                <div className="row">
                    <div className="col">
                        <Update show={show} />
                        <TeamMember show={show} teamId={teamId} />
                    </div>
                    <div className="col">
                        {designation === "manager" && <LeaveTable />}
                    </div>
                </div>
                <Team show={show} teamId={teamId} />
            </div>

        </>
    )
}

export default EmployeeDashboard;