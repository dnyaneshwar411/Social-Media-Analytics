"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState(null);

  // Helper: Save current session's messages to localStorage
  const saveMessagesToLocalStorage = (sessionId, updatedMessages) => {
    localStorage.setItem(`session-${sessionId}`, JSON.stringify(updatedMessages));
  };

  // Add message to current session
  const addMessage = (message) => {
    setMessages((prev) => {
      const updatedMessages = [...prev, message];
      saveMessagesToLocalStorage(currentSession, updatedMessages);
      return updatedMessages;
    });
  };

  // Switch session
  const switchSession = (sessionId) => {
    setCurrentSession(sessionId);
    const storedMessages = JSON.parse(localStorage.getItem(`session-${sessionId}`)) || [];
    setMessages(storedMessages);
  };

  // Create a new session
  const createNewSession = () => {
    const newSessionId = Date.now();
    const newSession = { id: newSessionId, title: `Session ${sessions.length + 1}` };
    setSessions((prev) => [...prev, newSession]);
    setCurrentSession(newSessionId);
    setMessages([]);
    localStorage.setItem("sessions", JSON.stringify([...sessions, newSession]));
  };

  // Retrieve sessions and messages on load
  useEffect(() => {
    const storedSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    setSessions(storedSessions);

    if (storedSessions.length > 0) {
      const firstSession = storedSessions[0];
      setCurrentSession(firstSession.id);
      const storedMessages = JSON.parse(localStorage.getItem(`session-${firstSession.id}`)) || [];
      setMessages(storedMessages);
    }
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    addMessage({
      id: Date.now(),
      role: "user",
      content: input,
    });

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
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
      const textoutput =
        data?.outputs?.[0]?.outputs?.[0]?.results?.message?.data?.text || "No response";
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
      value={{
        messages,
        addMessage,
        input,
        handleInputChange,
        handleSubmit,
        loading,
        sessions,
        currentSession,
        createNewSession,
        switchSession,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
