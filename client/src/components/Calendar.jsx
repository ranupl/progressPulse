import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = ({ onDateSelect }) => {
    const [date, setDate] = useState(new Date());
    const formattedDate = date.toISOString().split("T")[0];
    const onChange = date => {
        setDate(date);
        onDateSelect(date);
    }

    return (
        <>
            <div>
                <Calendar onChange={onChange} value={date} />
                {formattedDate}
            </div>
        </>
    )
}

export default ReactCalendar;