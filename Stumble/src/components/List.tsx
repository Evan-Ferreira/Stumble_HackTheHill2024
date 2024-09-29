import React, { useState } from "react";
import Row from "./Row";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  name: string;
  tag: string;
  difficulty: string;
  status?: string;
  link?: string;
}

const initialItems: Item[] = [
  { id: 1, name: "Say Hello!", tag: "Work", difficulty: "Easy", status: "NC" },
  {
    id: 2,
    name: "Give a compliment",
    tag: "Personal",
    difficulty: "Medium",
    status: "NC",
  },
  {
    id: 3,
    name: "Ask a good question!",
    tag: "Work",
    difficulty: "Medium",
    status: "NC",
  },
  {
    id: 4,
    name: "Texting 101",
    tag: "Study",
    difficulty: "Easy",
    status: "NC",
  },
  {
    id: 5,
    name: "Texting: Getting The Phone Number",
    tag: "Personal",
    difficulty: "Hard",
    status: "NC",
  },
  // Add more items as needed
];

const FilterableList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  const [selectedStatus, setStatus] = useState<string | undefined>(undefined);
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    string | undefined
  >(undefined);

  const filteredItems = initialItems.filter((item) => {
    const matchesSearchTerm = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? item.tag === selectedTag : true;
    const matchesStatus = selectedStatus
      ? item.status === selectedStatus
      : true;
    const matchesDifficulty = selectedDifficulty
      ? item.difficulty === selectedDifficulty
      : true;
    return (
      matchesSearchTerm && matchesTag && matchesDifficulty && matchesStatus
    );
  });

  const handleRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * filteredItems.length);
    if (filteredItems.length > 0) {
      const randomItem = filteredItems[randomIndex];
      window.location.href = randomItem.link || `/module${randomItem.id}`;
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

        <select
          value={selectedStatus}
          onChange={(e) => setStatus(e.target.value || undefined)}
          className="h-full rounded-md bg-white bg-opacity-10 px-2 text-gray-400"
        >
          <option value="NC">Not Completed</option>
          <option value="C">Completed</option>
          <option value="IP">In Progress</option>
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
      <div className="">
        <div className="mb-2 flex justify-between gap-4 bg-zinc-800 px-4 py-2 pr-8 text-[0.8em] text-gray-500">
          <div>Index</div>
          <div className="w-1/2">Name</div>
          <div className="mr-32">Tag</div>
          <div className="mr-20">Difficulty</div>
          <div className="flex-end">Status</div>
        </div>
        {filteredItems.map((item) => (
          <Row
            index={item.id}
            itemName={item.name}
            itemTag={item.tag}
            itemDifficulty={item.difficulty}
            itemLink={item.link || `/module${item.id}`}
          ></Row>

          //   <li key={item.id} className="mb-2">
          //     {item.name} - <span className="font-semibold">{item.tag}</span> |{" "}
          //     <span className="font-semibold">{item.difficulty}</span>
          //   </li>
        ))}
      </div>
    </div>
  );
};

export default FilterableList;
