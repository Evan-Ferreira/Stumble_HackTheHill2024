import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
  tag: string;
  difficulty: string;
}

const initialItems: Item[] = [
  { id: 1, name: "Task 1", tag: "Work", difficulty: "Easy" },
  { id: 2, name: "Task 2", tag: "Personal", difficulty: "Medium" },
  { id: 3, name: "Task 3", tag: "Work", difficulty: "Hard" },
  { id: 4, name: "Task 4", tag: "Study", difficulty: "Easy" },
  { id: 5, name: "Task 5", tag: "Personal", difficulty: "Medium" },
  // Add more items as needed
];

const FilterableList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    string | undefined
  >(undefined);

  const filteredItems = initialItems.filter((item) => {
    const matchesSearchTerm = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? item.tag === selectedTag : true;
    const matchesDifficulty = selectedDifficulty
      ? item.difficulty === selectedDifficulty
      : true;
    return matchesSearchTerm && matchesTag && matchesDifficulty;
  });

  const handleRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * filteredItems.length);
    if (filteredItems.length > 0) {
      alert(`Randomly Selected: ${filteredItems[randomIndex].name}`);
    } else {
      alert("No items to choose from!");
    }
  };

  return (
    <div className="">
      {/* Filters */}
      <div className="mb-4 flex h-12 space-x-4 align-middle">
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value || undefined)}
          className="rounded-md bg-white bg-opacity-10  px-2 text-gray-400"
        >
          <option value="">Select Tag</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value || undefined)}
          className="h-full rounded-md bg-white bg-opacity-10 px-2 text-gray-400"
        >
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 h-full w-full rounded-full  bg-white bg-opacity-10 px-6"
        />

        <button
          onClick={handleRandomChoice}
          className="h-12 min-w-12 rounded-full bg-green-600  text-white hover:bg-blue-600"
        >
          <center>
            <img src="random.svg" alt="Random" className="h-6 w-6" />
          </center>
        </button>
      </div>

      {/* Filtered List */}
      <ul className="list-disc pl-5">
        {filteredItems.map((item) => (
          <li key={item.id} className="mb-2">
            {item.name} - <span className="font-semibold">{item.tag}</span> |{" "}
            <span className="font-semibold">{item.difficulty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableList;
