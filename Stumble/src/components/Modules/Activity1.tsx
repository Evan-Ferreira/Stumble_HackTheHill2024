import React, { useState, useEffect } from "react";
import { useVoiceToText } from "react-speakup";

interface Activity1Props {
  setResponses?: (response: string) => void;
}

const Activity1: React.FC<Activity1Props> = ({ setResponses }) => {
  const { startListening, stopListening, transcript, reset } = useVoiceToText({
    continuous: true,
    lang: "en-US",
  });
  const [conversation, setConversation] = useState([]);
  const [recording, setRecording] = useState(false);
  const [transcription, setTranscription] = useState<string | null>(null);

  const startRecording = () => {
    startListening();
    setRecording(true);
  };

  const stopRecording = () => {
    stopListening();
    setRecording(false);
  };

  useEffect(() => {
    if (transcript) {
      setTranscription(transcript);
      if (setResponses) {
        setResponses(transcript); // If setResponses is provided, send the transcript
      }
    }
  }, [transcript, setResponses]);

  return (
    <div className="max-h-[16.5rem] items-center justify-center overflow-y-clip p-5">
      <div className="w-full max-w-md rounded-lg bg-zinc-700 p-4 shadow-lg">
        <h1 className="mb-2 text-center text-[1em] font-semibold text-white">
          Record Your Response
        </h1>

        <div className="flex justify-center">
          <button
            onClick={recording ? stopRecording : startRecording}
            className={`transform transition duration-300 ease-in-out hover:scale-105 ${
              recording
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-500 hover:bg-green-600"
            } w-full max-w-xs rounded-full px-6 py-3 text-lg font-medium text-white focus:outline-none`}
          >
            {recording ? (
              <>
                <span className="mr-2">🛑</span> Stop Recording
              </>
            ) : (
              <>
                <span className="mr-2">🎤</span> Start Recording
              </>
            )}
          </button>
        </div>

        {transcription && (
          <div className=" rounded-lg bg-gray-700 p-4 text-white shadow-inner">
            <p className="text-gray-300">{transcription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity1;
