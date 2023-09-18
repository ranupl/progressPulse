import React from 'react';
import MytimelineCard from '../cards/Mytimeline'; 

function MyTimelineList({ data }) {
  return (
    <div className="leave-list">
      {data.map((item, index) => (
        <MytimelineCard key={index} created={item.created} modified={item.modified} updates={item.updates} />
      ))}
    </div>
  );
}

export default MyTimelineList;