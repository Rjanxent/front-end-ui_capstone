import React, { useId } from "react";
import btrlegpics from '../assets/btrlegpics.jpg';
import btrlogo from '../assets/btrlogo.png';
import { Link } from "react-router-dom";

function RegisterService() {
    const usernameId = useId();
    const emailId = useId();
    const mobileId = useId();
    const passwordId = useId();
    const confirmPasswordId = useId();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registered!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative">
            {/* background image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${btrlegpics})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>

            {/* yellow overlay */}
            <div className="absolute inset-0 bg-[#FCFC62] opacity-90"></div>

            {/* register card */}
            <div className="relative p-6 space-y-4 w-full max-w-xl rounded-lg shadow-md bg-white"
                style={{ boxShadow: "0 4px 50px rgba(0, 0, 0, 0.3)" }}>

                {/* btr logo */}
                <img src={btrlogo} alt="Logo" className="mx-auto w-24 h-24" />

                {/* title */}
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Register
                </h2>

                {/* form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* LEFT COLUMN */}
                        <div className="space-y-4">
                            {/* Company Name */}
                            <div className="flex flex-col items-start space-y-2">
                                <label htmlFor={`company-${usernameId}`} className="text-gray-700 font-medium">
                                    Company Name
                                </label>
                                <input
                                    id={`company-${usernameId}`}
                                    placeholder="e.g. Juan Service Tech"
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            {/* Username */}
                            <div className="flex flex-col items-start space-y-2">
                                <label htmlFor={`user-${usernameId}`} className="text-gray-700 font-medium">
                                    Username
                                </label>
                                <input
                                    id={`user-${usernameId}`}
                                    placeholder="e.g. juan_delacruz"
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col items-start space-y-2">
                                <label htmlFor={emailId} className="text-gray-700 font-medium">
                                    Email
                                </label>
                                <input
                                    id={emailId}
                                    placeholder="e.g. juandelacruz@gmail.com"
                                    type="email"
                                    required
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <div className="flex flex-col items-start space-y-2">
                                <label htmlFor="accountType" className="text-gray-700 font-medium">
                                    Account Type
                                </label>
                                <select
                                    id="accountType"
                                    required
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    <option value="">Service Type</option>
                                    <option value="individual">Vehicle</option>
                                    <option value="company">Appliances</option>
                                    <option value="company">ICT Equipment</option>
                                </select>
                            </div>
                            
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-4">
                            {/* Mobile Number */}
                            <div className="flex flex-col items-start space-y-2">
                                <label htmlFor={mobileId} className="text-gray-700 font-medium">
                                    Mobile Number
                                </label>
                                <input
                                    id={mobileId}
                                    placeholder="e.g. 09XXXXXXXXX"
                                    type="tel"
                                    required
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            {/* Address */}
                            <div className="flex flex-col items-start space-y-2">
                                <label htmlFor={`addr-${usernameId}`} className="text-gray-700 font-medium">
                                    Address
                                </label>
                                <input
                                    id={`addr-${usernameId}`}
                                    placeholder="e.g. 123 Main St, Cebu City"
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col items-start space-y-2">
                                <label htmlFor={passwordId} className="text-gray-700 font-medium">
                                    Password
                                </label>
                                <input
                                    id={passwordId}
                                    placeholder="Enter your password"
                                    type="password"
                                    required
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="flex flex-col items-start space-y-2">
                                <label htmlFor={confirmPasswordId} className="text-gray-700 font-medium">
                                    Confirm Password
                                </label>
                                <input
                                    id={confirmPasswordId}
                                    placeholder="Re-enter your password"
                                    type="password"
                                    required
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>
                        </div>
                    </div>

                    {/* register button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded"
                    >
                        Register
                    </button>
                </form>

                {/* login link */}
                <p className="text-center text-sm">
                    Have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline font-medium">
                        Login</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterService