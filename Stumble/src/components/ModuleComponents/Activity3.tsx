import { useState } from "react"


function Activity3() {
  const [conversation, setConversation] = useState(["hi, im gavin", "hello there gavin im the ai"])
  const [mesg, setMesg] = useState("");
  const sendMesg = (mesg: string) =>{
    setConversation([...conversation, mesg])
    setMesg("")
  }
  return (
      <div className="h-[50vh] w-1/2 bg-zinc-800 text-white py-8 px-10 flex flex-col justify-between">
        <div className="overflow-scroll">
          {
            conversation.map((text, i)=>{
              const isYou = i % 2 == 0;
              return (
                <p className={`${isYou ? "text-right" : ""}`}>{text}</p>
              )
            })
          }
        </div>

        <div className="flex gap-8">
          <input
          className="grow bg-slate-500 rounded-md p-2"
          onChange={(evt)=>{
            setMesg(evt.target.value)
          }}
          onKeyUp={(evt)=>{
            if (evt.key === "Enter"){
              sendMesg(mesg)
            }
          }}
          value={mesg}/>

          <button
          className="border rounded-md py-2 px-8"
          onClick={()=>{
            sendMesg(mesg)
          }}>Send</button>
        </div>

      </div>
  )
}

export default Activity3
