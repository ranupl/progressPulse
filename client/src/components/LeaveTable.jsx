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
                console.log(response.data);
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

    
  const handleReject = async (leaveId) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/updateLeaveApply/${leaveId}`,
        { status: 'rejected' }
      );

      const updatedLeaves = leaves.map((leave) =>
        leave.id === leaveId ? { ...leave, status: 'rejected' } : leave
      );
      setLeaves(updatedLeaves);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async (leaveId) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/updateLeaveApply/${leaveId}`,
        { status: 'approved' }
      );

      const updatedLeaves = leaves.map((leave) =>
        leave.id === leaveId ? { ...leave, status: 'approved' } : leave
      );
      setLeaves(updatedLeaves);
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <>
            <div className="container border">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="font">Username</th>
                            <th scope="col" className="font">Type</th>
                            <th scope="col" className="font">Status</th>
                            <th scope="col" className="font">Start-Date</th>
                            <th scope="col" className="font">End-Date</th>
                            <th scope="col" className="font">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {leaves.map((leave, index) => (
                            <tr key={index}>
                                <td className="font">{leave.username}</td>
                                <td className="text-info font">{leave.type}</td>
                                <td className="text-danger font">{leave.status}</td>
                                <td className="font">{formatDate(leave.start_date)}</td>
                                <td className="font">{formatDate(leave.end_date)}</td>
                                <td><button type="button" onClick={() => handleReject(leave.id)} className="btn btn-danger font btn-size text-white">Reject</button>&nbsp;
                                <button type="button" onClick={() => handleApprove(leave.id)} className="btn btn-success font btn-size text-white">Approved</button>
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