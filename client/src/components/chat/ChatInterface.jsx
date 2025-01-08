import React from "react";
import ReactMarkdown from "react-markdown";
import { useChat } from "@/contexts/chatContext";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

import { Paperclip, ArrowUp } from "lucide-react";
export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, loading } =
    useChat();

  return (
    <div className="flex flex-col h-full w-full ">
      <form
        onSubmit={handleSubmit}
        className="p-4 gap-3 flex w-full justify-between border  border-[#a6a1a1] rounded-md text-white"
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message"
          className="w-full  px-2 py-1 border-none outline-none border-[#ffffff] text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Send
        </button>
      </form>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {loading && (
          <div className="flex justify-start items-center">
            <div className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-blue-500"></div>
            <span>Processing...</span>
          </div>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg p-2 max-w-[80%] ${
                m.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <pre className="whitespace-pre-wrap text-sm text-gray-800">
                {m.content}
              </pre>
              {/* <ReactMarkdown>{m.content}</ReactMarkdown> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
