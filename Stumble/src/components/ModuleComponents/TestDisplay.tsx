import React from "react";

interface TestDisplayProps {
  score: number | null;
  description?: string;
  feedback?: string;
}

const TestDisplay: React.FC<TestDisplayProps> = ({ score, description, feedback }) => {
  if (!score) {
    return <div>{description}</div>;
  } else if (score > 65) {
    return (
      <>
        <div className="text-green-400">Congratulations! You have passed the test.</div>
        <div className="text-white">{feedback}</div>
      </>
    )
  } else {
    return (
      <>
        <div className="text-red-400">Unfortunately, you did not pass the test. Please try again.</div>
        <div className="text-white">{feedback}</div>
      </>
    );
  }
};

export default TestDisplay;
