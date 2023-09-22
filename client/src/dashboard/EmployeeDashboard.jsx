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

const EmployeeDashboard = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [teamId, setTeamID] = useState("");
    const [show, setShow] = useState({
        update: true,   
        teams: false,
    });
    const token = localStorage.getItem("authToken");
    var decodedHeader = jwt_decode(token);
    const username = decodedHeader.employee.username;

    useEffect(() => {
        const predefinedColors = [
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(35,67,80,1) 35%, rgba(0,212,255,1) 100%)',
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(105,62,62,1) 50%, rgba(252,176,69,1) 100%)',
          'linear-gradient(90deg, rgba(58,86,180,1) 0%, rgba(105,99,62,1) 50%, rgba(252,69,117,1) 100%)'];
      
        axios.get("http://localhost:7000/getAllTeam",
         { headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json', 
          },})
          .then((response) => {
            const responseData = response.data;
            console.log(responseData);
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
            update: false
        }));
    }

    function handleLogout() {
        localStorage.removeItem("authToken");
        navigate("/login");
    }

    return (
        <>
            <div className="col-10">
                <div className="container">
                    <div className='d-flex mg-top border-bottom justify-content-between'>
                        <div className="d-flex"> <FontAwesomeIcon icon={faList} />&nbsp;&nbsp;
                            <h6 className='text-dark font-family'>Dashboard</h6></div>
                        {/* dropdown */}
                        <div class="dropdown">
                            <span className="text-color dropdown-toggle cursor-pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/images/user (1).png" width="23px" height="23px" alt="" />&nbsp;
                                {username}
                            </span>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </div>
                        {/* dropdown */}
                    </div>
                </div>
                <div className="container">
                    <div className="row border-bottom">
                        <h4 className="project">Projects/Teams</h4>
                    </div>
                </div>
                <div className="container mg-top">
                    <div className="d-flex">
                        <CardList data={data} handleClick={cardHandleClick} />
                    </div>
                </div>
                <div className="container">
                    <h6 className="mg-top font-family text-color mb-4">My Updates For Today</h6>
                </div>
                <div className="container">
                    <TeamForm />
                </div>
                <div className="row">
                    <div className="col"><Update show={show} /></div>
                    <div className="col"><LeaveTable /></div>
                </div>
                <Team show={show} teamId={teamId} />
            </div>

        </>
    )
}

export default EmployeeDashboard;