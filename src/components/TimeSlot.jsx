// src/components/TimeSlots.js
import React from "react";

const TimeSlots = () => {
  // Function to generate 30-minute time slots from startTime to endTime
  const generateTimeSlots = (startTime, endTime) => {
    const slots = [];
    let current = new Date(startTime);

    while (current < endTime) {
      const start = new Date(current);
      current.setMinutes(current.getMinutes() + 30); // Increment time by 30 minutes
      const end = new Date(current);

      // Formatting the time to display in HH:MM format without AM/PM
      const formattedStart = start
        .toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        .replace(" AM", "")
        .replace(" PM", "");

      const formattedEnd = end
        .toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        .replace(" AM", "")
        .replace(" PM", "");

      // Skip specific time slots
      if (
        (formattedStart === "1:00" && formattedEnd === "1:30") ||
        (formattedStart === "1:30" && formattedEnd === "2:00")
      ) {
        continue;
      }

      slots.push(`${formattedStart} - ${formattedEnd}`);
    }

    return slots;
  };

  // Setting the start and end time for the time slots
  const startTime = new Date();
  startTime.setHours(10, 0, 0, 0); // 10:00 AM

  const endTime = new Date();
  endTime.setHours(19, 0, 0, 0); // 7:00 PM

  // Generating the time slots using the function
  const timeSlots = generateTimeSlots(startTime, endTime);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-6 gap-4">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className="p-2 border rounded text-center bg-blue-100 hover:bg-blue-200 cursor-pointer"
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
}
export default TimeSlots;
