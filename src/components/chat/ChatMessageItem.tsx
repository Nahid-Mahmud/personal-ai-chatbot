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
        "group relative flex items-start gap-4 md:gap-6 ",
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

      {/* message container max width control */}

      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden",
          isUser ? "max-w-[80vw] md:max-w-[65vw] lg:max-w-[50vw] px-5" : "max-w-full"
        )}
      >
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

        {/* Message content control border and background */}

        <div
          className={cn(
            "prose prose-neutral dark:prose-invert max-w-none w-fit",
            // Add better line height and spacing for the prose content
            "prose-p:leading-relaxed prose-li:leading-relaxed prose-hr:my-6",
            isUser ? "ml-auto text-start border p-3 rounded-lg" : "mr-auto"
          )}
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
                    className="rounded-md border"
                    customStyle={{
                      maxWidth: "100%",
                      overflowX: "auto",
                      wordBreak: "break-word",
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={cn(className, "break-all")}>
                    {children}
                  </code>
                );
              },
              p: ({ children, ...props }) => (
                <p
                  {...props}
                  className="break-words whitespace-pre-wrap my-2"
                  style={{ overflowWrap: "anywhere", lineHeight: "1.6" }}
                >
                  {children}
                </p>
              ),
              pre: ({ children, ...props }) => (
                <pre {...props} className="overflow-x-auto" style={{ maxWidth: "100%", whiteSpace: "pre-wrap" }}>
                  {children}
                </pre>
              ),
              // Add specific styles for horizontal rules
              hr: ({ ...props }) => <hr {...props} className="my-6 border-t border-gray-300 dark:border-gray-600" />,
              // Fix for unordered lists (bullet points)
              ul: ({ children, ...props }) => (
                <ul {...props} className="list-disc pl-5 my-4" style={{ paddingLeft: "1.5rem" }}>
                  {children}
                </ul>
              ),
              // Add support for ordered lists (numbered lists)
              ol: ({ children, ...props }) => (
                <ol {...props} className="list-decimal pl-5 my-4" style={{ paddingLeft: "1.5rem" }}>
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li {...props} className="my-1 pl-1">
                  {children}
                </li>
              ),
              // strong

              strong: ({ children, ...props }) => (
                <strong {...props} className="font-semibold">
                  {children}
                </strong>
              ),

              // Add support for blockquotes
              blockquote: ({ children, ...props }) => (
                <blockquote
                  {...props}
                  className="border-l-4 pl-4 italic text-gray-600 dark:text-gray-400"
                  style={{ borderColor: "var(--color-primary)" }}
                >
                  {children}
                </blockquote>
              ),
            }}
          >
            {message.content}
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
