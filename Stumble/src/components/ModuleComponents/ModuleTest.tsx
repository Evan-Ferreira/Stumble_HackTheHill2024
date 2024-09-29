import React, { useState } from "react";
import TestDisplay from "./TestDisplay";
import { moduleDescriptions } from "../Modules/ModuleDescript";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface ModuleProps {
  gindex: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="p-3">
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const ModuleTest: React.FC<ModuleProps> = ({ gindex }) => {
  const [value, setValue] = useState(0);

  const handleChange = (index: number) => {
    setValue(index);
  };

  return (
    <div className="mx-4 mt-4 w-full max-w-[50vw]  rounded-lg border border-gray-500 bg-zinc-800  shadow-md">
      <div className="rounded-t-lg bg-zinc-700 px-4">
        <div className="flex items-center justify-start space-x-4 pt-2">
          <svg
            className="h-6 w-6 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="text-[1em] font-semibold text-white"> Test Prompts</h2>
        </div>
        <nav className=" flex ">
          <button
            className={`mr-1 ${value === 0 ? "border-green-500 text-green-600" : "border-transparent text-gray-500"} whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium`}
            onClick={() => handleChange(0)}
            {...a11yProps(0)}
          >
            Test 1
          </button>
          <button
            className={`mr-1 ${value === 1 ? "border-green-500 text-green-600" : "border-transparent text-gray-500"} whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium`}
            onClick={() => handleChange(1)}
            {...a11yProps(1)}
          >
            Test 2
          </button>
          <button
            className={`mr-1 ${value === 2 ? "border-green-500 text-green-600" : "border-transparent text-gray-500"} whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium`}
            onClick={() => handleChange(2)}
            {...a11yProps(2)}
          >
            Test 3
          </button>
        </nav>
      </div>
      <TabPanel value={value} index={0}>
        <TestDisplay
          description={moduleDescriptions[gindex - 1].description}
          title={moduleDescriptions[gindex - 1].title}
          score={null}
          testnum={1}
        ></TestDisplay>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TestDisplay
          description={moduleDescriptions[gindex - 1].description}
          title={moduleDescriptions[gindex - 1].title}
          score={null}
          testnum={2}
        ></TestDisplay>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TestDisplay
          description={moduleDescriptions[gindex - 1].description}
          title={moduleDescriptions[gindex - 1].title}
          score={null}
          testnum={3}
        ></TestDisplay>
      </TabPanel>
    </div>
  );
};

export default ModuleTest;
