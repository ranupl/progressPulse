import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = ({ onDateSelect }) => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        date.setDate(date.getDate() + 1);
        setDate(date);
        onDateSelect(date);
    }

    return (
        <>
            <div>
                <Calendar onChange={onChange} value={date} />
            </div>
        </>
    )
}

export default ReactCalendar;