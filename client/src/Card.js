import React from "react";

function Card({ title, content, cardStyle }) {
  return (
    <div className="container">
    <div className="card" style={cardStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
    </div>
  );
}

export default Card;
