import React from 'react';
import LeaveCard from './LeaveCard'; 

function AllLeaves({ data }) {
  return (
    <div className="leave-list">
      {data.map((item, index) => (
        <LeaveCard key={index} date={item.date} type={item.type} reason={item.reason} />
      ))}
    </div>
  );
}

export default AllLeaves;
