import React, { useState } from "react";
import Menu from "../components/Menu";
import ModuleActivity from "@/components/ModuleComponents/ModuleActivity";
import { Module } from "vm";
import ModuleTest from "@/components/ModuleComponents/ModuleTest";
import ModuleMenu from "@/components/ModuleComponents/ModuleMenu";
import ModuleDescription from "@/components/ModuleComponents/ModuleDescription";

const ModulePage: React.FC = () => {
  const [code, setCode] = useState<string>("");

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleRunCode = () => {
    console.log("Running code:", code);
    // Add logic to run the code
  };

  return (
    <div className="flex h-screen flex-col bg-[#1a1a1a] ">
      <ModuleMenu></ModuleMenu>

      <div className="flex flex-grow p-4  ">
        {/* Problem Description */}
        <aside className="h-full w-1/2  text-left ">
          <ModuleDescription
            description={"" || "Module Not Found"}
          ></ModuleDescription>
        </aside>

        {/* Activity */}
        <main className="h-full flex-grow ">
          <div className=" flex h-1/2 ">
            <ModuleActivity></ModuleActivity>
          </div>

          {/* Test Cases */}
          <div className=" flex h-1/2 ">
            <ModuleTest></ModuleTest>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ModulePage;
