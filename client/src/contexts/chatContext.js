"use client";

import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    // Add user's message
    addMessage({
      id: Date.now(),
      role: "user",
      content: input,
    });

    try {
      // Send request to backend
      const res = await fetch("http://localhost:5000/api/run-flow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          flowIdOrName: "9937a074-0cc3-4e1b-9d87-787867b7fdd6",
          langflowId: "be514be4-274d-4b9d-b305-5c07e5c7315d",
          inputValue: input,
          inputType: "chat",
          outputType: "chat",
          tweaks: {},
          stream: false,
        }),
      });
      const data = await res.json();
      console.log(data);
      const textoutput =
        data?.outputs?.[0]?.outputs?.[0]?.results?.message?.data?.text ||
        "No response";
      addMessage({
        id: Date.now() + 1,
        role: "assistant",
        content: textoutput,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, input, handleInputChange, handleSubmit,loading }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
