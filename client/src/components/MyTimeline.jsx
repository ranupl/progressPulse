import React from "react";
import { useState, useEffect } from "react";
import MyTimelineList from "../cardLists/MytimelineList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const MyTimeline = () => {
    const [data, setData] = useState([]);
    const userData = localStorage.getItem("user")
    const userObject = JSON.parse(userData);
    const id = userObject.id;
    
    useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/getProgressById/${id}`
          );
          console.log(response.data);
          setData(response.data.progress);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [id]);

    return (
        <>
            <div className="col-10">
                <div className="container">
                    <div className='d-flex mg-top border-bottom'>
                    <FontAwesomeIcon icon={faList} />&nbsp;&nbsp;
                        <h6 className='text-dark font-family'>MyTimeline</h6>
                    </div>
                </div>
                <div className="container mg-top">
                    <div className="d-flex">
                        <MyTimelineList data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyTimeline;