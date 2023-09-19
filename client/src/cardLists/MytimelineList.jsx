import React from 'react';
import MytimelineCard from '../cards/Mytimeline';
import axios from "axios";

function MyTimelineList({ data }) {

  const onUpdate = (progressId, updatedProgress) => {
    
    axios.put(`${process.env.REACT_APP_SERVER_URL}/updateProgress/${progressId}`,  {updates: updatedProgress})
      .then(response => {
        console.log("Updated successfully:", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="leave-list">
      {data.map((item, index) => (
        <MytimelineCard key={index} id={item.id} created={item.created} modified={item.modified} updates={item.updates} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default MyTimelineList;