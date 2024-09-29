import React, { useState } from "react";
import { useVoiceToText } from "react-speakup";

const Activity1: React.FC = () => {
  const { startListening, stopListening, transcript, reset } = useVoiceToText({
    continuous: true,
    lang: "en-US",
  });

  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [transcription, setTranscription] = useState<string | null>(null);

  const startRecording = () => {
    startListening();
    setRecording(true);
  };

  const stopRecording = () => {
    stopListening();
    setRecording(false);
    setTranscription(transcript);
  };

  return (
    <div className="flex  items-center justify-center p-5">
      <div className="w-full max-w-md rounded-lg bg-zinc-700 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-semibold text-white">
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
          <div className="mt-8 rounded-lg bg-gray-700 p-4 text-white shadow-inner">
            <h2 className="mb-3 text-lg font-semibold">Transcription:</h2>
            <p className="text-gray-300">{transcription}</p>
          </div>
        )}

        {transcription && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={reset}
              className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-indigo-600 focus:outline-none"
            >
              Reset Transcription
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity1;
