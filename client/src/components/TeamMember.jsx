import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TeamMember = ({ show, teamId }) => {
    const [teamMember, setTeamMember] = useState([]);
    const token = localStorage.getItem("authToken");

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
          <div className="card-list" style={{width:"510px"}}>
            {teamMember.map((team, index) => (
              <div key={index} className="text-center">
                <p className="text-center" width="5px" height="5px"><span className="member-icon">{team.first_name.charAt(0)}</span></p>
                {/* <img src="/images/user (1).png" width="21px" height="21px" alt="" /> */}
                <p className="font font-family p-2">{team.first_name} {team.last_name}</p>&nbsp;&nbsp;
              </div>
            ))}
          </div>
        </div>
      );      
}

export default TeamMember;