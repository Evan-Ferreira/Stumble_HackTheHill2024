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
    <div className="flex h-screen flex-col">
      <ModuleMenu></ModuleMenu>

      <div className="flex flex-grow ">
        {/* Problem Description */}
        <aside className="w-1/2 border-r ">
          <ModuleDescription></ModuleDescription>
        </aside>

        {/* Activity */}
        <main className="flex-grow bg-gray-50 p-6">
          <ModuleActivity></ModuleActivity>

          {/* Test Cases */}
          <div className="mt-4 flex space-x-4">
            <ModuleTest></ModuleTest>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ModulePage;
