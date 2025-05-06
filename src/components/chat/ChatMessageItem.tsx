/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";

import { User, Bot } from "lucide-react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface ChatMessageItemProps {
  message: Message;
}

export function ChatMessageItem({ message }: ChatMessageItemProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "group relative flex items-start gap-4 md:gap-6",
        isUser ? "justify-end text-right" : "justify-start text-left"
      )}
    >
      {!isUser && (
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow",
            "bg-background text-foreground"
          )}
        >
          <Bot className="h-5 w-5" />
        </div>
      )}

      <div className="flex-1 space-y-2 max-w-full overflow-hidden">
        <div className={cn("flex items-center gap-2", isUser ? "justify-end" : "justify-start")}>
          <div>
            <div className="font-semibold">{isUser ? "You" : "AI Assistant"}</div>
            <div className="text-xs text-muted-foreground">
              {message.timestamp
                ? new Date(message.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })
                : ""}
            </div>
          </div>
        </div>

        <div
          className={cn("prose prose-neutral dark:prose-invert max-w-full", isUser ? "ml-auto text-right" : "mr-auto")}
        >
          <Markdown
            components={{
              code(props) {
                const { children, className, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...(rest as any)}
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-md border overflow-auto max-w-full"
                    customStyle={{ maxWidth: "100%" }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={cn(className, "break-words")}>
                    {children}
                  </code>
                );
              },
              p: ({ children, ...props }) => (
                <p {...props} className="break-words whitespace-pre-wrap">
                  {children}
                </p>
              ),
              pre: ({ children, ...props }) => (
                <pre {...props} className="overflow-auto max-w-full">
                  {children}
                </pre>
              ),
            }}
          >
            {Array.isArray(message.content) ? message.content.join("") : message.content}
          </Markdown>
        </div>
      </div>

      {isUser && (
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow",
            "bg-primary text-primary-foreground"
          )}
        >
          <User className="h-5 w-5" />
        </div>
      )}
    </div>
  );
}
