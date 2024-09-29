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

  React.useEffect(() => {
    setTranscription(transcript);
  }, [transcript]);

  const stopRecording = () => {
    stopListening();
    setRecording(false);
    setTranscription(transcript);
    reset();
  };

  return (
    <div className="rounded-lg bg-zinc-800 p-5 text-white">
      <h1 className="mb-4 text-center text-xl">
        Record a Response Then Submit
      </h1>
      <button
        onClick={recording ? stopRecording : startRecording}
        className={`${
          recording ? "bg-red-500" : "bg-green-500"
        } mx-auto my-2 flex items-center justify-center rounded border-none px-4 py-2 text-white`}
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

      {transcription && (
        <p className="mt-5 text-center">
          <strong>Transcription:</strong> {transcription}
        </p>
      )}
    </div>
  );
};

export default Activity1;
