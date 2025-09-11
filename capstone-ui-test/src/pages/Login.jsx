import React, { useId } from "react";
import btrlegpics from '../assets/btrlegpics.jpg';
import btrlogo from '../assets/btrlogo.png';
import { Link } from "react-router-dom";

function Login() {
  const usernameId = useId();
  const passwordId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in!");
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

      {/* login card */}
      <form
        onSubmit={handleSubmit}
        className="relative p-6 space-y-4 w-full max-w-sm rounded-lg bg-white"
        style={{ boxShadow: "0 4px 50px rgba(0, 0, 0, 0.3)" }}
      >
        {/* btr logo */}
        <img src={btrlogo} alt="Logo" className="mx-auto w-24 h-24" />

        {/* title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        {/* username */}
        <div className="flex flex-col items-start space-y-2">
          <label htmlFor={usernameId} className="text-gray-700 font-medium">
            Username
          </label>
          <input
            id={usernameId}
            placeholder="Username"
            type="text"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>

        {/* password */}
        <div className="flex flex-col items-start space-y-2">
          <label htmlFor={passwordId} className="text-gray-700 font-medium">
            Password
          </label>
          <input
            id={passwordId}
            placeholder="Password"
            type="password"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-yellow-400"
          />

          {/* forgot Password */}
          <div className="w-full text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* login Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded"
        >
          Login
        </button>

        {/* register Link */}
        <p className="text-center text-sm">
          Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Register
            </Link>
        </p>
      </form>
    </div>
  );
}

  

export default Login;
