import React from "react";

interface TestDisplayProps {
  score: number | null;
  description?: string;
  title: string;
  testnum: number;
}

const TestDisplay: React.FC<TestDisplayProps> = ({
  score,
  description,
  testnum,
  title,
}) => {
  const baseStyle = "p-4 rounded-lg shadow-lg text-center";
  const passStyle = "bg-green-200 text-green-800";
  const failStyle = "bg-red-200 text-red-800";
  const neutralStyle = "bg-yellow-200 text-yellow-800";

  return (
    <div
      className={`${baseStyle} ${score === null ? neutralStyle : score > 65 ? passStyle : failStyle}`}
    >
      {score === null ? (
        <div className="font-semibold">
          <h1 className="text-2xl">
            {" "}
            {title}, Test {testnum}
          </h1>
          <p>Description:{description || "No score available."}</p>
          <p>
            Status: <strong>Have not yet submitted</strong> Please press run to
            run your interactions
          </p>
        </div>
      ) : score > 65 ? (
        <div className="text-xl font-bold">
          Congratulations! You have passed the test.
        </div>
      ) : (
        <div className="text-xl font-bold">
          Unfortunately, you did not pass the test. Please try again.
        </div>
      )}
    </div>
  );
};

export default TestDisplay;
