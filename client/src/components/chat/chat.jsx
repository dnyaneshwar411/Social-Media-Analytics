"use client";

import React, { useState } from "react";
import ChatInterface from "./ChatInterface";
export default function Chat() {
  return (
    <div className="flex flex-col h-screen max-w-[80%] mx-auto p-4">
      <div className="bg-white rounded-lg flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Analyze with AI</h2>
        </div>
        <ChatInterface />
      </div>
    </div>
  );
}
