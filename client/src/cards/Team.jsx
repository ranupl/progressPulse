import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Card({ id, title, content, cardStyle, handleClick }) {
  const [memberCount, setMemberCount] = useState(0);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    axios.get(`http://localhost:7000/getTeamMember/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        const count = response.data.team;
        setMemberCount(count.length);
      })
      .catch((error) => {
        console.error("Error fetching member count:", error);
      });
  }, [id]);

  return (
    <div className="container cursor-pointer" onClick={() => handleClick(id)}>
      <div className="teamCard" style={cardStyle}>
        <h6 className="text-white teamFont">{title}</h6>
        <p className="text-black d-flex justify-content-end"><span className="count-mem font">{memberCount}</span></p>
        <p>{content}</p>
        <div className="line"> </div>
      </div>
    </div>
  );
}

export default Card;
