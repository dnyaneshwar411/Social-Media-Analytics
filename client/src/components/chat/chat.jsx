"use client";

import React, { useState } from "react";
import ChatInterface from "./ChatInterface";
import ChatSidebar from "./ChatSidebar";
export default function Chat() {
  return (
    <div>
      <div className="bg-white rounded-lg flex">
        <ChatSidebar />
        <ChatInterface />
      </div>
    </div>
  );
}
