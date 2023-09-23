import React from "react";
    
function Card({id, title, content, cardStyle,handleClick }) {
  return (
    <div className="container cursor-pointer" onClick={() => handleClick(id)}>
      <div className="teamCard" style={cardStyle}>
        <h6 className="text-white teamFont">{title}</h6>
        <p>{content}</p>
        <div className="line"> </div>
      </div>
    </div>
  );
}

export default Card;
