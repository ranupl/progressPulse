import React from 'react';
import Card from '../cards/Team'; 

function CardList({ data,handleClick }) {
  return (
    <div className="card-list">
      {data.map((item, index) => (
        <Card key={index} id={item.id} title={item.title} content={item.content} cardStyle={{ background: item.color }} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default CardList;
