import React, { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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

const ModuleTest: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (index: number) => {
    setValue(index);
  };

  return (
    <div className="w-full rounded bg-white p-4 shadow-md">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex">
          <button
            className={`mr-1 ${value === 0 ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500"} whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium`}
            onClick={() => handleChange(0)}
            {...a11yProps(0)}
          >
            Tab 1
          </button>
          <button
            className={`mr-1 ${value === 1 ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500"} whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium`}
            onClick={() => handleChange(1)}
            {...a11yProps(1)}
          >
            Tab 2
          </button>
          <button
            className={`mr-1 ${value === 2 ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500"} whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium`}
            onClick={() => handleChange(2)}
            {...a11yProps(2)}
          >
            Tab 3
          </button>
        </nav>
      </div>
      <TabPanel value={value} index={0}>
        Content for Tab 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Tab 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content for Tab 3
      </TabPanel>
    </div>
  );
};

export default ModuleTest;
