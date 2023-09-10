import React from "react";

function Card({ title, content, cardStyle }) {
  return (
    <div className="container">
    <div className="card" style={cardStyle}>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
    </div>
  );
}

export default Card;
