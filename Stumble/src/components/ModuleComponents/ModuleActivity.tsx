import React from "react";
import Activity1 from "../Modules/Activity1";

interface ModuleActivityProps {
  index: number;
}

const ModuleActivity: React.FC<ModuleActivityProps> = ({ index }) => {
  return (
    <div className="mx-4 w-full rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 border-b pb-2">
        {index === 1 && <Activity1 />}
        {index !== 1 && (
          <h2 className="text-xl font-semibold">Activity Header {index}</h2>
        )}
      </div>
      <div>
        <p>This is the content of the activity module.</p>
      </div>
    </div>
  );
};

export default ModuleActivity;
