import React, { useState } from 'react';

// Combined Calendar and Time Picker component
const CalendarTimePicker = ({ onScheduleSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  // Function to generate days of the month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Handle date selection
  const handleDateClick = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(date);
  };

  // Function to render calendar days
  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="border p-4 text-transparent">-</div>); // Empty cells for alignment
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className={`border p-4 text-center cursor-pointer hover:bg-blue-200 ${selectedDate && selectedDate.getDate() === day ? 'bg-blue-400 text-white' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  // Function to navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Function to navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Handle schedule saving
  const handleScheduleSave = () => {
    if (selectedDate && selectedTime) {
      const schedule = {
        date: selectedDate,
        time: selectedTime
      };
      onScheduleSelect(schedule); // Notify parent component
    } else {
      alert('Please select both date and time');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <button className="p-2" onClick={goToPreviousMonth}>Previous</button>
        <h3 className="text-lg font-bold">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h3>
        <button className="p-2" onClick={goToNextMonth}>Next</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-semibold">{day}</div>
        ))}
        {renderDays()}
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">Select Time</label>
        <input
          type="time"
          className="border border-gray-300 p-2 w-full rounded"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        />
      </div>

      <div className="mt-4 flex justify-end">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleScheduleSave}
        >
          Save Schedule
        </button>
      </div>
    </div>
  );
};

export default CalendarTimePicker;
