import React from "react";
import { useState } from "react";
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
  const [responses, setResponses] = useState<any[]>([]);
  return (
    <div className="flex h-screen flex-col bg-[#1a1a1a] ">
      <ModuleMenu></ModuleMenu>

      <div className="flex flex-grow p-4  ">
        {/* Problem Description */}
        <aside className="h-full max-h-[87.7vh] w-1/2 text-left">
          <ModuleDescription
            title={content.title}
            description={content.description}
            exampleInput={content.exampleInput}
            exampleOutput={content.exampleOutput}
            exampleExplanation={content.exampleExplanation}
            img={content.img}
            audiopath={content.audiopath}
          />
        </aside>

        {/* Activity */}
        <main className="h-full flex-grow ">
          <div className=" flex h-1/2 ">
            <ModuleActivity
              index={index}
              setResponses={setResponses}
            ></ModuleActivity>
          </div>

          {/* Test Cases */}
          <div className=" flex h-1/2 ">
            <ModuleTest gindex={index}></ModuleTest>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ModulePage;
