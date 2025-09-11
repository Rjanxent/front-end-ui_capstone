import Header from "../components/header";
import profileuser from '../assets/profile-user.png';
import wrenchicon from '../assets/wrench.png';
import notifBell from '../assets/notification.png';
import Calendar from '../components/cal-endar';
import 'flowbite/dist/flowbite.css';
import 'flowbite-datepicker';
import React, { useState } from 'react';

function AdminDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // user menu
  const [isMegaOpen, setIsMegaOpen] = useState(false); // dashboard mega menu

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">
        {/* Navbar */}
        <nav className="w-full bg-white shadow-md rounded-xl mb-4 flex items-center justify-between py-4 px-4 sm:px-6 relative">
          <div className="flex items-center space-x-4">
            {/* Dashboard mega menu */}
            <div className="relative">
              <button
                onClick={() => setIsMegaOpen(!isMegaOpen)}
                className="flex items-center font-bold text-gray-800 px-3 py-2 rounded hover:bg-gray-100 transition-colors"
              >
                <span>Dashboard</span>
                <svg
                  className={`h-4 w-4 ml-1 text-gray-500 transform transition-transform duration-200 ${isMegaOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {isMegaOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg p-4 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    <a href="#" className="block px-2 py-1 hover:bg-gray-200 rounded">Messages</a>
                    <a href="#" className="block px-2 py-1 hover:bg-gray-200 rounded">Settings</a>
                    <a href="#" className="block px-2 py-1 hover:bg-gray-200 rounded">Sign Out</a>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* Notifications */}
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <span className="mr-2 hidden sm:inline">Notifications</span>
              <img src={notifBell} alt="Notifications" className="w-6 h-6" />
            </a>

            {/* User Dropdown */}
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img
                  src={profileuser}
                  alt="User"
                  className="h-8 w-8 rounded-full bg-gray-300 p-1"
                />
                <span className="sm:inline text-gray-700">Username</span>

                <svg
                  className={`h-4 w-4 text-gray-500 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign Out</a>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Main content container */}
        <div className="flex flex-wrap gap-6 justify-center max-w-6xl mx-auto">
          {/* Preventive Maintenance */}
          <button
            type="button"
            className="w-[1000px] md:w-[67%] h-[400px] bg-gray-100 rounded-xl text-gray-800 hover:bg-[#FCFC62] font-medium shadow-md text-3xl flex items-center justify-center space-x-4 transition-colors p-4 min-w-[200px]"
          >
            <img src={wrenchicon} alt="Wrench Icon" className="w-10 h-10 opacity-50" />
            <span>Preventive Maintenance</span>
          </button>

          {/* Calendar */}
          <div className="w-[350px] md:w-[350px] min-w-[300px] h-[400px]">
            <Calendar />
          </div>

          {/* Reminders (second row) */}
          <div className="w-full min-w-[300px] h-[350px] bg-gray-100 rounded-xl shadow-md p-4 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Reminders</h2>
            <ul className="flex-1 overflow-y-auto space-y-2">
              <li className="bg-white p-2 rounded shadow-sm">Maintenance</li>
              <li className="bg-white p-2 rounded shadow-sm">Maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
