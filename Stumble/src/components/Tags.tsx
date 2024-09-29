import React from "react";

interface TagProps {
  text: string;
  number: number;
}

const Tag: React.FC<TagProps> = ({ text, number }) => {
  return (
    <div className="inline-flex items-center rounded-lg text-white">
      <span className="mr-1 whitespace-nowrap text-[0.88em]">{text}</span>
      <span className="rounded-xl bg-gray-600 px-2 text-[0.8em] text-gray-200">
        {number}
      </span>
    </div>
  );
};

export default Tag;
