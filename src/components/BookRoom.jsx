// src/components/Calendar.js
import React, { useState, useEffect } from 'react';

const  BookRoom = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState([]);
  
    useEffect(() => {
      generateCalendar(currentDate);
    }, [currentDate]);
  
    const generateCalendar = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
  
      // First and last days of the current month
      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
  
      const daysInMonth = lastDayOfMonth.getDate();
      const firstDayIndex = firstDayOfMonth.getDay(); // Day of the week (0-Sunday, 1-Monday, ..., 6-Saturday)
      const prevDays = firstDayIndex; // Days to show from the previous month
  
      // Fill the days array to make it fit into a 7-week grid (7x7 = 49 days)
      const daysArray = [];
      const totalWeeks = 5; // Seven weeks
  
      // Calculate the starting day of the calendar grid (can include days from the previous month)
      const startDay = new Date(year, month, 1 - prevDays);
  
      for (let i = 0; i < totalWeeks * 7; i++) {
        const day = new Date(startDay);
        day.setDate(startDay.getDate() + i);
  
        daysArray.push({
          date: day,
          isCurrentMonth: day.getMonth() === month,
        });
      }
  
      setDays(daysArray);
    };
  
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
  
  
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
        </div>
        <div className="grid grid-cols-7 gap-2 bg-white border rounded-lg">
          {dayNames.map((day) => (
            <div key={day} className="text-center font-semibold p-1 border-b">
              {day}
            </div>
          ))}
          {days.map((day, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-1 border-t border-r h-8 ${
                day.isCurrentMonth ? "bg-white" : "bg-gray-100 text-gray-400"
              }`}
            >
              <span>{day.date.getDate()}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default BookRoom;
