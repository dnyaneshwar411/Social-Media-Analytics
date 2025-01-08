import React from "react";
import { useChat } from "@/contexts/chatContext";

export default function ChatSidebar() {
  const { sessions, switchSession, createNewSession, currentSession } = useChat();

  return (
    <aside className="w-64 bg-gray-100 border-r h-full flex flex-col">
      <div className="p-4 border-b">
        <button
          onClick={createNewSession}
          className="w-full bg-primary text-primary-foreground rounded-lg py-2"
        >
          New Session
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {sessions.map((session) => (
          <div
            key={session.id}
            onClick={() => switchSession(session.id)}
            className={`p-4 cursor-pointer ${currentSession === session.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
          >
            {session.title}
          </div>
        ))}
      </div>
    </aside>
  );
}
