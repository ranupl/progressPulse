import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TeamMember = ({ show, teamId }) => {
    const [teamMember, setTeamMember] = useState([]);
    const token = localStorage.getItem("authToken");
    console.log(teamMember);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/getTeamMember/${teamId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
                );
                setTeamMember(response.data.team);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [teamId]);

    return (
        <div className={show.teams ? "show border" : "hide"}>
          <p className="font text-color font-family p-2">Team Members</p>
          <div className="card-list p-2" style={{width:"510px"}}>
            {teamMember.map((team, index) => (
              <div key={index}>
                <img src="/images/user (1).png" width="21px" height="21px" alt="" />&nbsp;
                <span className="font font-family">{team.first_name} {team.last_name}</span>&nbsp;&nbsp;
              </div>
            ))}
          </div>
        </div>
      );      
}

export default TeamMember;