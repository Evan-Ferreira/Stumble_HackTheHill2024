import React from "react";
import { Link } from "react-router-dom";

// Logo Component
const Logo: React.FC = () => {
  return (
    <Link to="/" className="text-2xl font-bold">
      <img
        src="stumble.png"
        alt="Stumble"
        className="mr-4 h-10 w-10 rounded-full"
      />
    </Link>
  );
};

const Submission: React.FC = () => {
  return (
    <div className="flex space-x-4 rounded-lg bg-white bg-opacity-10">
      <button className="flex items-center rounded-lg px-4 py-2 font-bold text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3l14 9-14 9V3z"
          />
        </svg>
        Run
      </button>
      <button
        type="submit"
        className="flex items-center rounded-lg px-4 py-2 font-bold text-green-500 transition-all hover:bg-green-500 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3v18h18V3H3zm3 3h12v12H6V6zm3 3v6h6V9H9z"
          />
        </svg>
        Submit
      </button>
    </div>
  );
};

// NavLinks Component
const NavLinks: React.FC = () => {
  return (
    <nav>
      <Link
        to="/"
        className="mx-4 flex items-center rounded-lg bg-white bg-opacity-10 p-2 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
        Problem List
      </Link>
    </nav>
  );
};

// Notifications Component
const Notifications: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="flex items-center space-x-2 align-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5 text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2c.917 1.167 1.833 2.333 2.75 3.5C16.667 7.167 18 9.5 18 12c0 3.333-2.667 6-6 6s-6-2.667-6-6c0-2.5 1.333-4.833 3.25-6.5C10.167 4.333 11.083 3.167 12 2z"
        />
      </svg>
      <p className="text-sm leading-none">{count}</p>
    </div>
  );
};

// Profile Component
const Profile: React.FC = () => {
  return (
    <img
      src="pfp.jpg"
      alt="Profile"
      className="mr-4 h-10 w-10 rounded-full object-cover"
    />
  );
};

// ModuleMenu Component
const ModuleMenu: React.FC = () => {
  return (
    <header className="bg-[#302c2c] p-2 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-start">
          <Logo />
          <NavLinks />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 transform">
          <Submission></Submission>
        </div>

        <div className="flex items-center justify-around space-x-12">
          <Notifications count={5} />
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default ModuleMenu;
