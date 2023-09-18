import React from "react";
    
function Card({id, title, content, cardStyle,handleClick }) {
  return (
    <div className="container" onClick={() => handleClick(id)}>
      <div className="card" style={cardStyle}>
        <h6 className="text-white">{title}</h6>
        <p>{content}</p>
        <div className="line"> </div>
      </div>
    </div>
  );
}

export default Card;
