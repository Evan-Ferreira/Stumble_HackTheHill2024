// src/components/HomePage.tsx
import ListHeadingWithFilters from "@/components/Filters";
import InterestCard from "@/components/IntrestCards";
import FilterableList from "@/components/List";
import Menu from "@/components/Menu";
import StudyCard from "@/components/StudyPlan";
import React from "react";
import Calender from "react-calendar";

const HomePage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#1a1a1a]">
      {/* Header */}
      <Menu></Menu>

      {/* Main Content */}
      <div className="flex min-h-screen px-[15%]">
        <main className="container mx-auto my-8 w-3/4">
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
              <h1 className="mb-4 text-[1.2em] font-bold text-white">
                Study Plan
              </h1>
              <div className="flex justify-between space-x-4">
                <StudyCard
                  title={"Top 30 Modules"}
                  description={
                    "Learn to date effectively with these top modules."
                  }
                  imageUrl={"module1.jpg"}
                ></StudyCard>
                <StudyCard
                  title={"Communication Skills"}
                  description={"Enhance your communication skills."}
                  imageUrl={"module2.jpg"}
                ></StudyCard>
                <StudyCard
                  title={"Body Language"}
                  description={"Understand and use body language."}
                  imageUrl={"module3.jpg"}
                ></StudyCard>
              </div>
              <div className="mt-4 flex justify-between space-x-4">
                <StudyCard
                  title={"Confidence Building"}
                  description={"Boost your confidence."}
                  imageUrl={"module4.jpg"}
                ></StudyCard>
                <StudyCard
                  title={"First Impressions"}
                  description={"Make a great first impression."}
                  imageUrl={"module5.jpg"}
                ></StudyCard>
                <StudyCard
                  title={"Advanced Techniques"}
                  description={"Learn about lasting relationships."}
                  imageUrl={"module6.jpg"}
                ></StudyCard>
              </div>
            </div>
          </div>

          {/* Featured Problems */}
          <section className="my-0 h-fit">
            <ListHeadingWithFilters></ListHeadingWithFilters>
            <FilterableList></FilterableList>
          </section>
        </main>
        <div className="container mx-auto my-4 w-1/4 p-4">
          <Calender
            className="rounded-lg bg-white bg-opacity-10 p-4 text-gray-300"
            formatShortWeekday={(locale, date) =>
              date.toLocaleDateString(locale, { weekday: "narrow" })
            }
            tileClassName={({ date, view }) =>
              view === "month" &&
              date.toDateString() === new Date().toDateString()
                ? "bg-blue-500 rounded-full text-white"
                : ""
            }
            tileContent={({ view }) =>
              view === "month" ? <div className="h-1"></div> : null
            }
          ></Calender>
          <section className="mt-8">
            <h1 className="mb-2 text-[1em] text-white">User Stats</h1>
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
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>© 2024 Stumble. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
