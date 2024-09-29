import React from "react";

function Stats() {
  return (
    <div className="rounded-lg bg-zinc-800 p-4 text-left shadow-lg">
      {/* Stat 0 */}
      <div className="mb-6">
        <span className="text-lg font-semibold text-white">
          You are placed 4,432,110th in the world
        </span>
      </div>
      {/* Stat 1 */}
      <div className="mb-4">
        <span className="text-sm font-medium text-gray-300">Confidence</span>
        <div className="mt-1 h-4 w-full overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-600"
            style={{ width: "40%" }} // Example percentage for the stat
          ></div>
        </div>
      </div>
      {/* Stat 2 */}
      <div className="mb-4">
        <span className="text-sm font-medium text-gray-300">Articulation</span>
        <div className="mt-1 h-4 w-full overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-teal-600"
            style={{ width: "70%" }} // Example percentage for the stat
          ></div>
        </div>
      </div>
      {/* Stat 3 */}
      <div className="mb-4">
        <span className="text-sm font-medium text-gray-300">Efficiency</span>
        <div className="mt-1 h-4 w-full overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full bg-gradient-to-r from-red-400 to-pink-600"
            style={{ width: "90%" }} // Example percentage for the stat
          ></div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
