import Header from "../components/header";
import profileuser from '../assets/profile-user.png';
import wrenchicon from '../assets/wrench.png';
import notifBell from '../assets/notification.png';
import React, { useState } from 'react';
import ToolBar from "../components/toolbarAdmin";
import { Link } from "react-router-dom";



function AdminPreventiveMaint() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // user menu
    const [isMegaOpen, setIsMegaOpen] = useState(false); // dashboard mega menu

    return (
        <>
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
                                <span>Preventive Maintenance</span>
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
                                        <Link to="/dashboard" className="block px-2 py-1 hover:bg-gray-200 rounded">Dashboard</Link>
                                        <a href="#" className="block px-2 py-1 hover:bg-gray-200 rounded">Messages</a>
                                        <a href="#" className="block px-2 py-1 hover:bg-gray-200 rounded">Monitor Maintenance</a>
                                        <a href="#" className="block px-2 py-1 hover:bg-gray-200 rounded">Service Centers</a>
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
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 flex gap-3">
                        <button className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-[#FCFC62] transition">
                            PPE
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-[#FCFC62] transition">
                            RPCSP
                        </button>
                    </div>
                <ToolBar onAddItem={() => setShowTypeOverlay(true)}/>
            </div>
        </div>

</>
    );
}


export default AdminPreventiveMaint;
