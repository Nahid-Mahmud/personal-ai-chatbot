import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";

import { User, Bot } from "lucide-react";

interface ChatMessageItemProps {
  message: Message;
}

export function ChatMessageItem({ message }: ChatMessageItemProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("group relative flex items-start gap-4 md:gap-6", isUser ? "justify-end" : "")}>
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow",
          isUser ? "bg-primary text-primary-foreground" : "bg-background text-foreground"
        )}
      >
        {isUser ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <div className="font-semibold">{isUser ? "You" : "AI Assistant"}</div>
          <div className="text-xs text-muted-foreground">
            {/* {format(new Date(message.timestamp), "h:mm a")} */}
            {message.timestamp
              ? new Date(message.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : ""}
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert">
          <p className="leading-relaxed">{message.content}</p>
        </div>
      </div>
    </div>
  );
}
