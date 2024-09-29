import React, { useState, useEffect } from "react";
import { useVoiceToText } from "react-speakup";
import ModuleMenu from "../ModuleComponents/ModuleMenu";

const Activity2: React.FC = () => {
  const [response1, setResponse1] = useState("");
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");

  const { startListening, stopListening, transcript, reset } = useVoiceToText({
    continuous: true,
    lang: "en-US",
  });

  // Update response1 whenever the transcript changes
  useEffect(() => {
    if (transcript && response1 === "Recording...") {
      setResponse1(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    if (transcript && response2 === "Recording...") {
      setResponse2(transcript);
    }
  }, [transcript]);

  const handleStopListening = () => {
    reset();
    stopListening();
  };

  return (
    <div className="p-4">
      <ModuleMenu/>
      {/* Recording 1 Section */}
      <div className="mb-2 flex justify-between">
        <span>{response1}</span>
        <div className="flex space-x-2">
          <button
            onClick={() => {
              startListening();
              setResponse1("Recording...");
            }}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Start
          </button>
          <button
            onClick={handleStopListening}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            End
          </button>
          <button
            onClick={() => {
              reset();
              setResponse1(""); // Clear the response when resetting
            }}
            className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Play Audio Section */}
      <div className="mb-2 flex justify-between">
        <audio controls>
          <source src="path_to_audio_file.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Recording 2 Section */}

      <div className="mb-2 flex justify-between">
        <span>{response2}</span>
        <div className="flex space-x-2">
          <button
            onClick={() => {
              startListening();
              setResponse2("Recording...");
            }}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Start
          </button>
          <button
            onClick={handleStopListening}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            End
          </button>
          <button
            onClick={() => {
              reset();
              setResponse2(""); // Clear the response when resetting
            }}
            className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity2;
