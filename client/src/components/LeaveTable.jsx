import React, { useEffect, useState } from "react";
import axios from "axios";

const LeaveTable = () => {
    const [leaves, setLeaves] = useState([]);

    useEffect(() => {
       const fetchData = async () => {
            try{
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/getAllLeaveApply`
                );
                setLeaves(response.data);
            } catch (error)
            {
                console.log(error);
            }
       }
       fetchData();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <div className="container border">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Type</th>
                            <th scope="col">Start-Date</th>
                            <th scope="col">End-Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {leaves.map((leave, index) => (
                            <tr key={index}>
                                <td className="font">{leave.username}</td>
                                <td className="text-danger font">{leave.type}</td>
                                <td className="font">{formatDate(leave.start_date)}</td>
                                <td className="font">{formatDate(leave.end_date)}</td>
                                <td><button type="submit" className="btn btn-danger font btn-size text-white">Reject</button>&nbsp;
                                <button type="submit" className="btn btn-success font btn-size text-white">Approved</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default LeaveTable;