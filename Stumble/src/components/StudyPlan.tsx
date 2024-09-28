import React from "react";

interface InterestCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const StudyCard: React.FC<InterestCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className=" w-full overflow-hidden rounded-lg bg-white bg-opacity-10 text-left">
      <div className="flex h-20 items-center justify-between space-x-7 p-4">
        <img
          src={imageUrl}
          alt={title}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="ml-4"></div>
      </div>
    </div>
  );
};

export default StudyCard;
