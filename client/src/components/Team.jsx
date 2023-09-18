import React, { useEffect, useState } from "react";
import axios from "axios"; 



const Team = ({ show, teamId }) => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/getTeamById/${teamId}`
          );
  
          console.log(response.data);
          setTeams(response.data.team);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [teamId]);

    return (
        <div className={show.teams ? "show" : "hide"}>
        {/* <h1>team1</h1> */}
        {teams.map((team) => (
          <div className="container" key={team.id}>
            <p>{team.updates}</p>
          </div>
        ))}
      </div>
    )
}

export default Team;