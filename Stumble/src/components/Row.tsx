import React from "react";
import { Link } from "react-router-dom";

interface RowProps {
  index: number;
  itemName: string;
  itemTag: string;
  itemDifficulty: string;
  status?: string;
  itemLink?: string;
}

const Row: React.FC<RowProps> = ({
  index,
  itemName,
  itemTag,
  itemDifficulty,
  status,
  itemLink,
}) => {
  const isEven = index % 2 === 0;
  const rowClass = isEven ? "bg-white bg-opacity-10" : "bg-white bg-opacity-0";

  return (
    <Link to={itemLink || "/"} className="">
      <div
        className={`flex ${rowClass} justify-start px-10 py-4 text-left transition-all hover:bg-black hover:bg-opacity-20 `}
      >
        <div className="flex-0 px-4 text-white hover:text-blue-700">
          {index}
        </div>
        <div className="flex-0 w-1/2 px-8 text-white hover:text-blue-700">
          {itemName}
        </div>
        <div className="flex-1 text-white ">{itemTag}</div>
        <div
          className={`flex-1 ${
            itemDifficulty === "Easy"
              ? "text-green-500"
              : itemDifficulty === "Medium"
                ? "text-yellow-500"
                : itemDifficulty === "Hard"
                  ? "text-red-500"
                  : "text-white"
          }`}
        >
          {itemDifficulty}
        </div>
        <div className="flex-0  items-center justify-center ">
          {status === "C" ? (
            <span role="img" aria-label="completed">
              ❤️
            </span>
          ) : status === "IP" ? (
            <span role="img" aria-label="pending">
              ⏳
            </span>
          ) : (
            <span role="img" aria-label="not completed"></span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Row;
