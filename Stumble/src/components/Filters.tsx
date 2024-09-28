import React from "react";
import Tag from "./Tags";
import TagButton from "./TagButtons";

const ListHeadingWithFilters: React.FC = () => {
  return (
    <div className="overflow-x-clip ">
      {/* Row 1: Buttons */}
      <div className="relative mb-8 flex  overflow-hidden ">
        <div className="flex flex-nowrap justify-between space-x-7">
          <Tag text="Flirting" number={10} />
          <Tag text="Dating" number={15} />
          <Tag text="Romance" number={8} />
          <Tag text="Love" number={12} />
          <Tag text="Relationships" number={20} />
          <Tag text="Crushes" number={5} />
          <Tag text="Dating Apps" number={7} />
          <Tag text="Blind Dates" number={3} />
          <Tag text="Speed Dating" number={6} />
          <Tag text="Online Dating" number={9} />
          <Tag text="First Dates" number={4} />
        </div>

        {/* Opacity Mask */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#1a1a1a] to-transparent" />
      </div>

      {/* Row 2: Buttons */}
      <div className="mb-4 flex space-x-2">
        <TagButton text="All" icon="🌍" selected={true} />
        <TagButton text="Popular" icon="🔥" />
        <TagButton text="New" icon="🆕" />
        <TagButton text="Trending" icon="📈" />
        <TagButton text="Favorites" icon="❤️" />
      </div>

      {/* Row 3: Buttons */}
    </div>
  );
};

export default ListHeadingWithFilters;
