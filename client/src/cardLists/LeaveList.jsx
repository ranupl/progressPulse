import React from 'react';
import LeaveCard from '../cards/Leave'; 

function AllLeaves({ data }) {
  return (
    <div className="leave-list">
      {data.map((item, index) => (
        <LeaveCard key={index} sdate={item.start_date} edate={item.end_date} type={item.type} days={item.no_of_days} reason={item.reason} status={item.status} />
      ))}
    </div>
  );
}

export default AllLeaves;
