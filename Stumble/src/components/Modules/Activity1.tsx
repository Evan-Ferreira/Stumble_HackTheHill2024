import React, { useState, useRef } from "react";
import ModuleMenu from "../ModuleComponents/ModuleMenu";
import axios from "axios";

const Activity1: React.FC = () => {
  const [recording, setRecording] = useState<boolean>(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [transcription, setTranscription] = useState<string>("");

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const speechRecognitionRef = useRef<SpeechRecognition | null>(null);

  const startRecording = async () => {
    try {
      // Start recording audio
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        audioChunksRef.current = [];
      };

      // Start speech recognition
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        speechRecognitionRef.current = new SpeechRecognition();
        if (speechRecognitionRef.current) {
          speechRecognitionRef.current.interimResults = false;
          speechRecognitionRef.current.lang = "en-US";

          speechRecognitionRef.current.onresult = (
            event: SpeechRecognitionEvent,
          ) => {
            const result = event.results[0][0].transcript;
            setTranscription(result);
          };

          speechRecognitionRef.current.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
          };

          speechRecognitionRef.current.start();
        }
      } else {
        console.error("Web Speech API is not supported in this browser.");
      }

      // Start recording
      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }

    if (speechRecognitionRef.current) {
      speechRecognitionRef.current.stop();
    }
  };

  return (
    <div className="rounded-lg bg-zinc-800 p-5 text-white">
      <ModuleMenu></ModuleMenu>
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
      {audioURL && (
        <div className="mt-5 text-center">
          <audio src={audioURL} controls className="w-full" />
        </div>
      )}
      {transcription && (
        <p className="mt-5 text-center">
          <strong>Transcription:</strong> {transcription}
        </p>
      )}
    </div>
  );
};

export default Activity1;
