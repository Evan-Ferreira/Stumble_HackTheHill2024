import React from "react";

interface TagButtonProps {
  text: string;

  icon: React.ReactNode;
  selected?: boolean;
}

const TagButton: React.FC<TagButtonProps> = ({
  text,

  icon,
  selected = false,
}) => {
  return (
    <button
      className={`inline-flex items-center rounded-full px-4 py-2 ${
        selected
          ? "bg-white text-gray-800"
          : "bg-white bg-opacity-10 text-white"
      }`}
    >
      <span className="mr-2">{icon}</span>
      <span className="mr-2 whitespace-nowrap text-[1em]">{text}</span>
    </button>
  );
};

export default TagButton;
