import React from "react";

const ModuleActivity: React.FC = () => {
  return (
    <div className=" mx-4 w-full rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 border-b pb-2">
        <h2 className="text-xl font-semibold">Activity Header</h2>
      </div>
      <div>
        <p>This is the content of the activity module.</p>
      </div>
    </div>
  );
};

export default ModuleActivity;
