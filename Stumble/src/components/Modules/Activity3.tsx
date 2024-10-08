import { useEffect, useState } from "react";
import axios from "axios";
import ModuleMenu from "../ModuleComponents/ModuleMenu";

function Activity3({ setResponses }) {
  const [conversation, setConversation] = useState([]);
  const [mesg, setMesg] = useState("");
  const [loading, setLoading] = useState(false);
  const [IDs, setIDs] = useState({ assistantID: null, threadID: null });

  useEffect(() => {
    if (conversation.length === 6) {
      setLoading(true);

      axios
        .post("http://localhost:3000/answer", {
          question: 3,
          input: conversation,
        })
        .then((res) => {
          setResponses(res.data);
        });
    }
    if (conversation.length % 2 !== 0) {
      axios
        .post("http://localhost:3000/questions/q3", {
          assistantID: IDs.assistantID,
          threadID: IDs.threadID,
          message: conversation[conversation.length - 1],
        })
        .then((res) => {
          setConversation([...conversation, res.data.message]);
          setIDs({
            assistantID: res.data.assistantID,
            threadID: res.data.threadID,
          });
          setLoading(false);
        });
    }
  }, [conversation]);

  const sendMesg = (mesg: string) => {
    if (mesg.trim() === "") return; // Prevent sending empty messages
    setConversation([...conversation, mesg]);
    setLoading(true);
    setMesg("");
  };

  return (
    <div className="flex h-[16rem] w-full flex-col bg-zinc-800 px-8 pt-4 text-white">
      <ModuleMenu
        submit={() => {
          axios
            .post("http://localhost:3000/answer", {
              question: 3,
              input: conversation,
            })
            .then((res) => {
              setResponses(res.data);
            });
          setLoading(true);
        }}
      />
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
          className={`flex-1 rounded-md bg-slate-500 p-2 text-white ${loading ? "opacity-30" : ""}`}
          onChange={(evt) => setMesg(evt.target.value)}
          onKeyUp={(evt) => {
            if (evt.key === "Enter") {
              sendMesg(mesg);
            }
          }}
          value={mesg}
          placeholder="Type your message..."
          {...(loading ? { disabled: true } : {})}
        />

        <button
          className={`rounded-md bg-blue-600 px-4 py-2 text-white transition duration-300 ${loading ? "opacity-50" : "hover:bg-blue-700"}`}
          onClick={() => sendMesg(mesg)}
          {...(loading ? { disabled: true } : {})}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Activity3;
