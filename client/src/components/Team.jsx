import React, { useEffect, useState } from "react";
import EmployeeTable from "./EmployeeTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPenNib, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import jwt_decode from "jwt-decode";
import ReactCalendar from "./Calendar";

const Team = ({ show, teamId }) => {
  const [teams, setTeams] = useState([]);
  const token = localStorage.getItem("authToken");
  var decodedHeader = jwt_decode(token);
  const designation = decodedHeader.employee.designation;
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/getTeamById/${teamId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          params: {
            selectedDate: formatDate(selectedDate), 
          },
        }
        );

        const formattedData = response.data.team.map((team) => ({
          ...team,
          created: formatDate(team.created),
          modified: formatDate(team.modified),
        }));
        setTeams(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [teamId, selectedDate]);

  return (
    <div className={show.teams ? "show leave-list" : "hide"}>
      {designation === "manager" && <EmployeeTable teamId={teamId} />}
      <div className="container">
        {/* dropdown */}
        <div className="dropdown d-flex justify-content-end mb-2 ">
          <span className="cursor-pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <ReactCalendar onDateSelect={handleDateSelect} />
          </ul>
        </div>
        {/* dropdown */}
      </div>
      {teams.map((team) => (
        <div className="container border p-3" key={team.id}>
          <div className="d-flex">
            <p className="font"><span className="text-color">created : </span> {team.created}</p>&nbsp;&nbsp;
            <p className="font"><span className="text-color">modified : </span> {team.modified}</p>
          </div>
          <p className="font"><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;username: {team.username}</p>
          <p className="font"><FontAwesomeIcon icon={faPenNib} />&nbsp;&nbsp;updates: {team.updates}</p>
        </div>
      ))}
    </div>
  )
}

export default Team;