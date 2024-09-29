import React, { useState } from "react";
import ModuleActivity from "@/components/ModuleComponents/ModuleActivity";
import ModuleTest from "@/components/ModuleComponents/ModuleTest";
import ModuleMenu from "@/components/ModuleComponents/ModuleMenu";
import ModuleDescription from "@/components/ModuleComponents/ModuleDescription";
import { moduleDescriptions } from "@/components/Modules/ModuleDescript";

interface ModulePageProps {
  index: number;
}
const ModulePage: React.FC<ModulePageProps> = ({ index }) => {
  const content = moduleDescriptions[index - 1];
  const [responses, setResponses] = useState([]);
  return (
    <div className="flex h-screen flex-col bg-[#1a1a1a] ">
      <div className="h-[7%] w-screen"></div>

      <div className="flex flex-grow p-4  ">
        {/* Problem Description */}
        <aside className="h-full w-1/2 text-left">
          <ModuleDescription
            title={content.title}
            description={content.description}
            exampleInput={content.exampleInput}
            exampleOutput={content.exampleOutput}
            exampleExplanation={content.exampleExplanation}
          />
        </aside>

        {/* Activity */}
        <main className="h-full flex-grow ">
          <div className=" flex h-1/2 ">
            <ModuleActivity index={index} setResponses={setResponses}></ModuleActivity>
          </div>

          {/* Test Cases */}
          <div className=" flex h-1/2 ">
            <ModuleTest responses={responses}></ModuleTest>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ModulePage;
