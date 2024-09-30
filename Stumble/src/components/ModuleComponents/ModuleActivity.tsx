import React from "react";
import Activity1 from "../Modules/Activity1";
import Activity3 from "../Modules/Activity3";
import Activity2 from "../Modules/Activity2";

interface ModuleActivityProps {
  index: number;
  setResponses: React.Dispatch<React.SetStateAction<any[]>>;
}

const ModuleActivity: React.FC<ModuleActivityProps> = ({
  index,
  setResponses,
}) => {
  return (
    <div className="mx-4 w-full max-w-[50vw] rounded-lg border border-gray-500 bg-zinc-800  shadow-md">
      <div className="">
        <ul className="flex gap-8 rounded-t-lg bg-zinc-700 px-4 py-2 text-white">
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Activity
          </li>
        </ul>
      </div>
      <div className="mb-4  h-full max-h-[50vh] border-b pb-2">
        {index === 1 && <Activity1 setResponses={setResponses} />}
        {index === 2 && <Activity2 setResponses={setResponses} />}
        {index === 3 && <Activity3 setResponses={setResponses} />}
        {/* {index !== 1 && (
          <h2 className="text-xl font-semibold">Activity Header {index}</h2>
        )} */}
      </div>
    </div>
  );
};

export default ModuleActivity;
