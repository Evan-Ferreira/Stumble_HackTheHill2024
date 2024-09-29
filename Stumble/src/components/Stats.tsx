import React from "react";

function Stats() {
  return (
    <div className=" text-left">
      {/* Stat 1 */}
      <div className=" ">
        <span className="text-[0.6em] text-white">Confidence</span>
        <div className="h-4 w-full overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-600"
            style={{ width: "40%" }} // Example percentage for the stat
          ></div>
        </div>
      </div>
      {/* Stat 2 */}
      <div className="">
        <span className="text-[0.6em] text-white">Articulation</span>
        <div className="h-4 w-full overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-teal-600"
            style={{ width: "70%" }} // Example percentage for the stat
          ></div>
        </div>
      </div>
      {/* Stat 3 */}
      <div className="">
        <span className="text-[0.6em] text-white">Efficency</span>
        <div className="h-4 w-full overflow-hidden rounded-full bg-gray-700">
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
