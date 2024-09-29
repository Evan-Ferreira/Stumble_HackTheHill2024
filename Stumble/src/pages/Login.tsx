import React, { useState } from "react";

const Login = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  // Check for browser compatibility
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  // Function to handle speech recognition
  const startListening = () => {
    if (!recognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }
    setIsListening(true);
    recognition.continuous = true; // Enable continuous recognition
    recognition.interimResults = true; // Allow interim results

    recognition.onresult = (event) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptPart = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcriptPart;
        } else {
          interimTranscript += transcriptPart;
        }
      }

      setTranscript(finalTranscript + interimTranscript);
    };

    recognition.start();
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="voice-to-text">
      <h1>Voice to Text Transcription</h1>
      <div className="controls">
        <button onClick={isListening ? stopListening : startListening}>
          {isListening ? "Stop Listening" : "Start Listening"}
        </button>
      </div>
      <div className="transcript">
        <h2>Transcript:</h2>
        <p>{transcript || "Waiting for your voice..."}</p>
      </div>
    </div>
  );
};

export default Login;
