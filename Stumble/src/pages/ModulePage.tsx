import React, { useState } from "react";
import Menu from "../components/Menu";
import ModuleActivity from "@/components/ModuleComponents/ModuleActivity";

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
      <Menu></Menu>

      <div className="flex flex-grow">
        {/* Problem Description */}
        <aside className="w-1/2 border-r bg-gray-100">
          <ul className="space-y-2 p-4">
            <li className="cursor-pointer rounded border bg-white p-2">
              Problem 1
            </li>
            <li className="cursor-pointer rounded border bg-white p-2">
              Problem 2
            </li>
            <li className="cursor-pointer rounded border bg-white p-2">
              Problem 3
            </li>
          </ul>
        </aside>

        {/* Activity */}
        <main className="flex-grow bg-gray-50 p-6">
          <ModuleActivity></ModuleActivity>

          <div className="mt-6">
            <h3 className="mb-2 text-lg">Test Cases</h3>
            <div className="flex space-x-4">
              <button className="rounded bg-gray-200 px-4 py-2">
                Test Case 1
              </button>
              <button className="rounded bg-gray-200 px-4 py-2">
                Test Case 2
              </button>
              <button className="rounded bg-gray-200 px-4 py-2">
                Test Case 3
              </button>
            </div>
          </div>

          {/* Test Cases */}
          <div className="mt-4 flex space-x-4">
            <div className="w-1/3 rounded border bg-white p-4 shadow">
              <h4 className="text-md mb-2">Test Case 1</h4>
              <p>Input and expected output for test case 1...</p>
            </div>
            <div className="w-1/3 rounded border bg-white p-4 shadow">
              <h4 className="text-md mb-2">Test Case 2</h4>
              <p>Input and expected output for test case 2...</p>
            </div>
            <div className="w-1/3 rounded border bg-white p-4 shadow">
              <h4 className="text-md mb-2">Test Case 3</h4>
              <p>Input and expected output for test case 3...</p>
            </div>
            <button
              onClick={handleRunCode}
              className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
            >
              Run Code
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ModulePage;
