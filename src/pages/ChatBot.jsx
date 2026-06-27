import { useEffect, useRef, useState } from "react";
import { chatAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";

const QUICK_PROMPTS = [
  "Predict colleges for my percentile",
  "Required CAP documents",
  "Explain CAP rounds",
  "Freeze vs Float",
];

function AssistantMessage({ children }) {
  return (
    <div className="flex gap-3">

      <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black flex-shrink-0">
        AI
      </div>

      <div className="max-w-3xl rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">

        <p className="text-[15px] leading-7 text-slate-700 whitespace-pre-wrap">
          {children}
        </p>

      </div>

    </div>
  );
}

function UserMessage({ children }) {
  return (
    <div className="flex justify-end">

      <div className="max-w-3xl rounded-3xl bg-blue-600 px-5 py-4 shadow-lg">

        <p className="text-white text-[15px] leading-7 whitespace-pre-wrap">
          {children}
        </p>

      </div>

    </div>
  );
}

function Typing() {
  return (
    <div className="flex gap-3">

      <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black">
        AI
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4">

        <div className="flex gap-2">

          <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"/>

          <div
            className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"
            style={{animationDelay:"0.15s"}}
          />

          <div
            className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"
            style={{animationDelay:"0.3s"}}
          />

        </div>

      </div>

    </div>
  );
}

export default function Chatbot() {

  const { student } = useAuth();

  const [messages,setMessages] = useState([
    {
      role:"assistant",
      content:`Hi ${student?.name?.split(" ")[0] || ""}! 👋

I'm your AI Counselling Assistant.

Ask me anything about

• MHT-CET
• CAP Rounds
• Colleges
• Documents
• Cutoffs
• Option Form
• Admissions`
    }
  ]);

  const [input,setInput] = useState("");

  const [loading,setLoading] = useState(false);

  const bottomRef = useRef(null);

  const inputRef = useRef(null);

  useEffect(()=>{

    bottomRef.current?.scrollIntoView({
      behavior:"smooth"
    });

  },[messages,loading]);

    const sendMessage = async (text = null) => {

    const message = text || input.trim();

    if (!message || loading) return;

    setInput("");

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    setLoading(true);

    try {

      const { data } = await chatAPI.send(message);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.response ||
            "Sorry, I couldn't generate a response.",
        },
      ]);

    } catch (err) {

      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong while contacting SecureSeat AI. Please try again.",
        },
      ]);

    } finally {

      setLoading(false);

      inputRef.current?.focus();

    }

  };

    return (

    <div className="min-h-screen bg-[#F4F6F9] pt-24 pb-12">

      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}

        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">

          <div className="flex items-center justify-between flex-wrap gap-6">

            <div>

              <h1
                className="text-3xl font-black text-slate-900"
                style={{
                  fontFamily:"Syne,sans-serif"
                }}
              >
                AI Counselling Assistant
              </h1>

              <p className="mt-2 text-slate-500">

                Ask anything about MHT-CET 2026 counselling.

              </p>

            </div>

            <div className="flex items-center gap-3">

              <span className="w-3 h-3 rounded-full bg-green-500"/>

              <span className="text-sm font-semibold text-slate-600">

                Online

              </span>

            </div>

          </div>

        </div>

        {/* Chat */}

        <div className="mt-6 bg-white rounded-3xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden">

          {/* Messages */}

          <div className="h-[65vh] overflow-y-auto p-8 space-y-6">

            {messages.map((msg,index)=>{

              if(msg.role==="assistant"){

                return (

                  <AssistantMessage key={index}>

                    {msg.content}

                  </AssistantMessage>

                );

              }

              return (

                <UserMessage key={index}>

                  {msg.content}

                </UserMessage>

              );

            })}

            {loading && <Typing />}

            <div ref={bottomRef}/>

          </div>

                    <div className="border-t border-slate-100 px-6 py-5">

            <div className="flex flex-wrap gap-3">

              {QUICK_PROMPTS.map((prompt)=>(

                <button

                  key={prompt}

                  onClick={()=>sendMessage(prompt)}

                  className="rounded-full bg-blue-50 border border-blue-100 hover:bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold transition"

                >

                  {prompt}

                </button>

              ))}

            </div>

          </div>

                    {/* Input */}

          <div className="border-t border-slate-100 bg-slate-50 p-6">

            <div className="flex items-end gap-4">

              <textarea

                ref={inputRef}

                rows={1}

                value={input}

                onChange={(e)=>setInput(e.target.value)}

                onKeyDown={(e)=>{

                  if(e.key==="Enter" && !e.shiftKey){

                    e.preventDefault();

                    sendMessage();

                  }

                }}

                placeholder="Ask anything about MHT-CET counselling..."

                className="
                  flex-1
                  resize-none
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-4
                  text-[15px]
                  text-slate-700
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-100
                  transition
                  max-h-40
                "

              />

              <button

                onClick={()=>sendMessage()}

                disabled={loading || !input.trim()}

                className="
                  h-14
                  w-14
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-700
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  flex
                  items-center
                  justify-center
                  text-white
                  transition
                  shadow-lg
                  shadow-blue-200
                "

              >

                <svg

                  xmlns="http://www.w3.org/2000/svg"

                  fill="none"

                  viewBox="0 0 24 24"

                  strokeWidth={2}

                  stroke="currentColor"

                  className="w-6 h-6"

                >

                  <path

                    strokeLinecap="round"

                    strokeLinejoin="round"

                    d="M6 12 3 21l18-9L3 3l3 9h7"

                  />

                </svg>

              </button>

            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-400">

              <span>

                Press <b>Enter</b> to send · <b>Shift + Enter</b> for a new line

              </span>

              <span>

                SecureSeat AI · Powered by Groq

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}