import { useState } from "react";
import ModuleMenu from "../ModuleComponents/ModuleMenu";

function Activity3() {
  const [conversation, setConversation] = useState([
    "hi, I'm gavin",
    "hello there gavin, I'm the AI",
  ]);
  const [mesg, setMesg] = useState("");

  const sendMesg = (mesg: string) => {
    if (mesg.trim() === "") return; // Prevent sending empty messages
    setConversation([...conversation, mesg]);
    setMesg("");
  };

  return (
    <div className="flex h-[18rem] w-full flex-col bg-zinc-800 text-white">
      <ModuleMenu></ModuleMenu>
      <div className="h-full flex-1 overflow-y-scroll rounded-lg bg-zinc-700 p-4 shadow-md">
        {conversation.map((text, i) => {
          const isYou = i % 2 === 0;
          return (
            <p
              key={i}
              className={`mb-2 rounded-lg p-2 ${isYou ? "bg-blue-600 text-right" : "bg-green-600 text-left"}`}
            >
              {text}
            </p>
          );
        })}
      </div>

      <div className="flex space-x-2 p-2">
        <input
          className="flex-1 rounded-md bg-slate-500 p-2 text-black"
          onChange={(evt) => setMesg(evt.target.value)}
          onKeyUp={(evt) => {
            if (evt.key === "Enter") {
              sendMesg(mesg);
            }
          }}
          value={mesg}
          placeholder="Type your message..."
        />

        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
          onClick={() => sendMesg(mesg)}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Activity3;
