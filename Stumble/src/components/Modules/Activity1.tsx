import React, { useState, useRef } from "react";

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
    <div>
      <h1>Audio Recorder with Frontend Transcription</h1>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? "Stop Recording" : "Start Recording"}
      </button>
      {audioURL && <audio src={audioURL} controls />}
      {transcription && <p>Transcription: {transcription}</p>}
    </div>
  );
};

export default Activity1;
