import React from "react";

interface TestDisplayProps {
  score: number | null;
  description?: string;
}

const TestDisplay: React.FC<TestDisplayProps> = ({ score, description }) => {
  if (score === null) {
    return <div>{description}</div>;
  } else if (score > 65) {
    return <div className="text-green-400">Congratulations! You have passed the test.</div>;
  } else {
    return (
      <div className="text-red-400">Unfortunately, you did not pass the test. Please try again.</div>
    );
  }
};

export default TestDisplay;
