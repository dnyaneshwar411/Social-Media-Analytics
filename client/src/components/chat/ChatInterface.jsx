'use client'

import { useChat } from "@/contexts/chatContext"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Send, User } from 'lucide-react'
import { marked } from "marked"

export default function ChatInterface() {
  const { messages, loading } = useChat()

  return (
    <Card className="w-full flex flex-col h-[calc(100vh-2rem)]">
      <ScrollArea className="flex-1 p-4 !rounded-0">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
            >
              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback className="bg-primary/10">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`flex flex-col max-w-[80%] ${message.role === 'user' ? 'items-end' : 'items-start'
                  }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 ${message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                    }`}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: marked(message.content) }}
                    className="whitespace-pre-wrap text-sm"
                  />
                </div>
              </div>
              {message.role === 'user' && (
                <Avatar>
                  <AvatarFallback className="bg-primary/10">
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary/10">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg px-4 py-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-foreground/30 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      {messages.length === 0 && <div className="h-full text-[20px] md:text-[32px] font-bold flex items-center justify-center">
        No Chats yet
      </div>}
      <UserInput />
    </Card>
  )
}

function UserInput() {
  const { input, handleInputChange, handleSubmit, loading } = useChat()

  return <CardContent className="p-4 border-t">
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message..."
        className="flex-1"
        disabled={loading}
      />
      <Button type="submit" disabled={loading}>
        <Send className="h-4 w-4 mr-2" />
        Send
      </Button>
    </form>
  </CardContent>
}