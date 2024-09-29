import React from "react";

const FakeLogin: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#1a1a1a]">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-center">
          <img
            src="stumble.png"
            alt="Stumble Logo"
            className="mr-2 h-10 w-10"
          />
          <h2 className="text-2xl font-bold text-gray-800">Stumble</h2>
        </div>
        <form>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Gender Dropdown */}
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Gender Interested In Dropdown */}
          <div className="mb-6">
            <label htmlFor="interestedIn" className="block text-gray-700">
              Gender You're Interested In
            </label>
            <select
              id="interestedIn"
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <a
            href="/"
            className="block w-full rounded bg-indigo-500 p-2 text-center text-white transition-colors hover:bg-indigo-600"
          >
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default FakeLogin;
