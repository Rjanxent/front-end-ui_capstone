import React, { useState } from "react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const getFirstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const generateCalendar = () => {
    const days = [];
    const numDays = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const prevMonthDays = getDaysInMonth(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );

    // Leading days
    for (let i = firstDay; i > 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="text-center p-2 text-gray-400">
          {prevMonthDays - i + 1}
        </div>
      );
    }

    // Current month days
    for (let i = 1; i <= numDays; i++) {
      const isToday =
        new Date().getDate() === i &&
        new Date().getMonth() === currentDate.getMonth() &&
        new Date().getFullYear() === currentDate.getFullYear();

      days.push(
        <div
          key={`current-${i}`}
          className={`text-center p-2 rounded-lg cursor-pointer transition 
            ${isToday ? "font-bold bg-[#FCFC62] text-gray-900" : "hover:bg-gray-200"}`}
        >
          {i}
        </div>
      );
    }

    // Fill remaining slots
    const totalDays = days.length;
    const remainingSlots = 42 - totalDays;
    for (let i = 1; i <= remainingSlots; i++) {
      days.push(
        <div key={`next-${i}`} className="text-center p-2 text-gray-400">
          {i}
        </div>
      );
    }

    return days;
  };

  const goToNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };

  const goToPrevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className="w-[350px] h-[400px] flex flex-col rounded-xl border border-gray-300 transition-colors p-2 shadow-md ">
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-2 p-1">
        <button
          onClick={goToPrevMonth}
          className="p-1 rounded-full hover:bg-gray-200 transition"
        >
          ‹
        </button>
        <span className="text-lg font-semibold text-gray-800">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <button
          onClick={goToNextMonth}
          className="p-1 rounded-full hover:bg-gray-200 transition"
        >
          ›
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-medium text-sm text-gray-500 mb-1 p-2">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 text-sm flex-1">
        {generateCalendar()}
      </div>
    </div>
  );
}

export default Calendar;
