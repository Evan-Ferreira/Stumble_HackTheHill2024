import React from "react";
import { Link } from "react-router-dom";

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

const Menu: React.FC = () => {
  return (
    <header className="bg-[#302c2c] p-4 text-white">
      <div className="container mx-auto flex items-center justify-between px-[15%]">
        <div className="container mx-auto flex items-center justify-start">
          <Link to="/" className="text-2xl font-bold">
            <img
              src="stumble.png"
              alt="Stumble"
              className="mr-4 h-10 w-10 rounded-full"
            />
          </Link>
          <nav>
            <Link
              to="/problems"
              className="mx-4 h-full border-b-2 border-transparent transition-all hover:border-white"
            >
              Problems
            </Link>
            <Link
              to="/solutions"
              className="mx-4 h-full border-b-2 border-transparent transition-all hover:border-white"
            >
              Solutions
            </Link>
            <Link
              to="/about"
              className="mx-4 h-full border-b-2 border-transparent transition-all hover:border-green-500"
            >
              About
            </Link>
          </nav>
        </div>
        <div>
          <div className="flex items-center justify-around space-x-12">
            <Notifications count={5} />
            <div className="container mx-auto flex items-center justify-start">
              <img
                src="pfp.jpg"
                alt="Profile"
                className="mr-4 h-10 w-10 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
