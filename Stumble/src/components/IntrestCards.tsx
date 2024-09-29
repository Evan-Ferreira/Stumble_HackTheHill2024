import React from "react";

interface InterestCardProps {
  title: string;
  description: string;
  imageUrl: string;
  color: string;
}

const InterestCard: React.FC<InterestCardProps> = ({
  title,
  description,
  imageUrl,
  color,
}) => {
  return (
    <div className=" w-full overflow-hidden rounded-lg text-left shadow-lg">
      <div
        className="h-36 w-full bg-cover bg-center p-[5%]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h3 className=" text-xl font-bold text-white">{title}</h3>
        <p className="text-[0.8em] text-base text-gray-200">{description}</p>
        <button
          className={`mt-1 rounded bg-white px-2 py-2 text-[0.6em] font-bold hover:bg-blue-700`}
          style={{ color: color }}
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default InterestCard;
