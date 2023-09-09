import React from 'react';
import Card from './Card'; 

function CardList({ data }) {
  return (
    <div className="card-list">
      {data.map((item, index) => (
        <Card key={index} title={item.title} content={item.content} cardStyle={{ backgroundColor: item.color }} />
      ))}
    </div>
  );
}

export default CardList;
