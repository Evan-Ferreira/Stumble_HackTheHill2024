// src/components/HomePage.tsx
import ListHeadingWithFilters from "@/components/Filters";
import InterestCard from "@/components/IntrestCards";
import FilterableList from "@/components/List";
import Menu from "@/components/Menu";
import StudyCard from "@/components/StudyPlan";
import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#1a1a1a]">
      {/* Header */}
      <Menu></Menu>

      {/* Main Content */}
      <div className="flex min-h-screen px-[15%]">
        <main className="container mx-auto my-8 w-4/5">
          {/* Modules */}
          <div className="flex justify-between space-x-4">
            <InterestCard
              title={"Start Dating: Crash Course"}
              description={"Flirting, Introductions and More!"}
              imageUrl={"love1.png"}
              color="#FF69B4" // Hot pink color
            ></InterestCard>
            <InterestCard
              title={"Start Dating: Crash Course"}
              description={"Flirting, Introductions and More!"}
              imageUrl={"love2.png"}
              color="#008080" // teal color
            ></InterestCard>
            <InterestCard
              title={"Start Dating: Crash Course"}
              description={"Flirting, Introductions and More!"}
              imageUrl={"love3.png"}
              color="blue"
            ></InterestCard>
          </div>

          {/* styling */}
          <div className="container mx-auto my-8 flex-grow text-left">
            <div>
              <h1 className="mb-4 text-3xl font-bold">Study Plan</h1>
              <div className="flex justify-between space-x-4">
                <StudyCard
                  title={"Top 30 Modules"}
                  description={"Learn to date"}
                  imageUrl={""}
                ></StudyCard>
                <StudyCard
                  title={"Top 30 Modules"}
                  description={"Learn to date"}
                  imageUrl={""}
                ></StudyCard>
                <StudyCard
                  title={"Top 30 Modules"}
                  description={"Learn to date"}
                  imageUrl={""}
                ></StudyCard>
              </div>
              <div className="mt-4 flex justify-between space-x-4">
                <StudyCard
                  title={"Top 30 Modules"}
                  description={"Learn to date"}
                  imageUrl={""}
                ></StudyCard>
                <StudyCard
                  title={"Top 30 Modules"}
                  description={"Learn to date"}
                  imageUrl={""}
                ></StudyCard>
                <StudyCard
                  title={"Top 30 Modules"}
                  description={"Learn to date"}
                  imageUrl={""}
                ></StudyCard>
              </div>
            </div>
          </div>

          {/* Featured Problems */}
          <section className="my-0 h-fit">
            <ListHeadingWithFilters></ListHeadingWithFilters>
            <FilterableList></FilterableList>
            <h2 className="mb-4 text-2xl font-semibold">Featured Problems</h2>
            <ul className="list-disc pl-5">
              <li>
                <Link
                  to="/problems/1"
                  className="text-blue-600 hover:underline"
                >
                  Two Sum
                </Link>
              </li>
              <li>
                <Link
                  to="/problems/2"
                  className="text-blue-600 hover:underline"
                >
                  Add Two Numbers
                </Link>
              </li>
              <li>
                <Link
                  to="/problems/3"
                  className="text-blue-600 hover:underline"
                >
                  Longest Substring Without Repeating Characters
                </Link>
              </li>
              <li>
                <Link
                  to="/problems/4"
                  className="text-blue-600 hover:underline"
                >
                  Median of Two Sorted Arrays
                </Link>
              </li>
            </ul>
          </section>
        </main>
        <div className="container mx-auto my-8 w-1/5">
          <h1 className="mb-4 text-3xl font-bold">Side Bar</h1>
          <p className="mb-2">
            asdasdadasd Practice your coding skills with our curated problems.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>© 2024 LeetCode Clone. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
