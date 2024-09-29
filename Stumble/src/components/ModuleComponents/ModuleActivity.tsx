import React from "react";
import Activity1 from "../Modules/Activity1";
import Activity3 from "../Modules/Activity3";

interface ModuleActivityProps {
  index: number;
}

const ModuleActivity: React.FC<ModuleActivityProps> = ({ index }) => {
  return (
    <div className="mx-4 w-full max-w-[50vw] rounded-lg border border-gray-500 bg-zinc-800 p-4 shadow-md">
      <div className="mb-4 h-full border-b pb-2">
        {index === 1 && <Activity1 />}
        {index === 3 && <Activity3 />}
        {/* {index !== 1 && (
          <h2 className="text-xl font-semibold">Activity Header {index}</h2>
        )} */}
      </div>
    </div>
  );
};

export default ModuleActivity;
