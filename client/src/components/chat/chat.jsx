"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatInterface from "./ChatInterface";
export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-lg w-80 h-full flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Chat Support</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <ChatInterface />
      </div>
    </div>
  );
}
