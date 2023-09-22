import React, { useEffect, useState } from "react";
import EmployeeTable from "./EmployeeTable";
import axios from "axios";

const Team = ({ show, teamId }) => {
  const [teams, setTeams] = useState([]);

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
  }, [teamId]);

  return (
    <div className={show.teams ? "show" : "hide"}>
      <EmployeeTable teamId={teamId}/>
      {teams.map((team) => (        
        <div className="container border" key={team.id}>
          <div className="d-flex">
            <p className="font text-success">created: {team.created}</p>&nbsp;&nbsp;
            <p className="font text-success">modified: {team.modified}</p>
          </div>
          <p className="text-info">username: {team.username}</p>
          <p className="text-info">updates: {team.updates}</p>
        </div>
      ))}
    </div>
  )
}

export default Team;