import React, { useState, useEffect } from "react";
import { useVoiceToText } from "react-speakup";
import axios from "axios";

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
    setTranscription("");
  };

  const stopRecording = () => {
    stopListening();
    setRecording(false);
  };

  useEffect(() => {
    setTranscription(transcript);
    if (transcript !== "") {
      setConversation([transcript]);
    }
  }, [transcript]);
  useEffect(() => {
    if (conversation.length !== 0) {
      const fetchData = async () => {
        try {
          const response = await axios.post(
            "http://localhost:3000/questions/q1",
            {
              assistantID: null,
              threadID: null,
              message: conversation[conversation.length - 1],
            },
            { responseType: "blob" },
          );
          console.log("received");
          const blob = response.data;
          const audioUrl = URL.createObjectURL(blob);
          const newAudio = new Audio(audioUrl);
          newAudio.play();
          const response1 = await axios.get("http://localhost:3000/mongo/1");
          console.log("mongoman");
          const newList = conversation.concat(response1.data.message);
          const response2 = await axios.post("http://localhost:3000/answer", {
            question: 1,
            input: newList,
          });
          if (setResponses) {
            setResponses(response2.data);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [conversation]);

  return (
    <div className="max-h-[16.5rem] items-center justify-center overflow-y-clip p-5">
      <div className="w-full max-w-md rounded-lg bg-zinc-700 p-4 shadow-lg">
        <h1 className="mb-2 text-center text-[1em] font-semibold text-white">
          Record Your Response
        </h1>

        <div className="flex justify-center">
          <button
            onClick={recording ? stopRecording : startRecording}
            className={`m-2 transform transition duration-300 ease-in-out hover:scale-105 ${
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
          {transcription != "" && (
            <div className=" m-2 flex justify-center">
              <button
                onClick={() => {
                  reset();
                  if (setTranscription) {
                    setTranscription(""); // Reset the response as well
                  }
                }}
                className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-indigo-600 focus:outline-none"
              >
                Reset Transcription
              </button>
            </div>
          )}
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
