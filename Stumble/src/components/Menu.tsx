import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between px-[15%]">
        <div className="container mx-auto flex items-center justify-start">
          <Link to="/" className="text-2xl font-bold">
            LeetCode Clone
          </Link>
          <nav>
            <Link to="/problems" className="mx-4 hover:underline">
              Problems
            </Link>
            <Link to="/solutions" className="mx-4 hover:underline">
              Solutions
            </Link>
            <Link to="/about" className="mx-4 hover:underline">
              About
            </Link>
          </nav>
        </div>
        <div>
          <div className="flex items-center justify-around space-x-12">
            <p className="text-sm">Streak: 5 days</p>
            <div className="container mx-auto flex items-center justify-start">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="mr-4 h-10 w-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
