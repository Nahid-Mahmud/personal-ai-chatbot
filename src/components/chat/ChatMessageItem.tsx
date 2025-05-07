/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";

import { User, Bot, Copy, Check } from "lucide-react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState } from "react";
import { toast } from "react-toastify";

interface ChatMessageItemProps {
  message: Message;
}

export function ChatMessageItem({ message }: ChatMessageItemProps) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const handleCopy = async () => {
    if (isUser) return;

    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy message: ", err);
    }
  };

  const handleCopyCode = async (content: string, codeId: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedCodeId(codeId);
      toast.success("Code copied to clipboard!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => setCopiedCodeId(null), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

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
            "relative",
            isUser
              ? "ml-auto text-start border p-3 rounded-lg"
              : "prose prose-neutral dark:prose-invert max-w-none w-fit mr-auto prose-p:leading-relaxed prose-li:leading-relaxed prose-hr:my-6"
          )}
        >
          {isUser ? (
            // Simple display for user messages
            <div className="break-words whitespace-pre-wrap" style={{ lineHeight: "1.6" }}>
              {message.content}
            </div>
          ) : (
            // Rich markdown for AI messages
            <Markdown
              components={{
                code(props) {
                  const { children, className, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  const content = String(children).replace(/\n$/, "");

                  // Handle HTML-like content by escaping angle brackets
                  const escapedContent = content.replace(/</g, "&lt;").replace(/>/g, "&gt;");

                  // Generate a unique ID for this code block
                  const codeId = `code-${Math.random().toString(36).substr(2, 9)}`;

                  return match ? (
                    <div className="relative group/code">
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
                        {content}
                      </SyntaxHighlighter>
                      <button
                        onClick={() => handleCopyCode(content, codeId)}
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white transition-colors"
                        title="Copy code"
                      >
                        {copiedCodeId === codeId ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  ) : (
                    <code
                      {...rest}
                      className={cn(className, "break-all px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded")}
                    >
                      {escapedContent}
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
                // Strong (bold) text styling
                strong: ({ children, ...props }) => (
                  <strong {...props} className="font-bold">
                    {children}
                  </strong>
                ),
                // Emphasis (italic) text styling
                em: ({ children, ...props }) => (
                  <em {...props} className="italic">
                    {children}
                  </em>
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
                // Add support for headings with proper spacing
                h1: ({ children, ...props }) => (
                  <h1 {...props} className="text-2xl font-bold my-4">
                    {children}
                  </h1>
                ),
                h2: ({ children, ...props }) => (
                  <h2 {...props} className="text-xl font-bold my-4">
                    {children}
                  </h2>
                ),
                h3: ({ children, ...props }) => (
                  <h3 {...props} className="text-lg font-bold my-3">
                    {children}
                  </h3>
                ),
                h4: ({ children, ...props }) => (
                  <h4 {...props} className="text-base font-semibold my-3">
                    {children}
                  </h4>
                ),
                // Table styling
                table: ({ children, ...props }) => (
                  <div className="overflow-x-auto my-4">
                    <table {...props} className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children, ...props }) => (
                  <thead {...props} className="bg-gray-100 dark:bg-gray-800">
                    {children}
                  </thead>
                ),
                tbody: ({ children, ...props }) => (
                  <tbody {...props} className="divide-y divide-gray-200 dark:divide-gray-800">
                    {children}
                  </tbody>
                ),
                tr: ({ children, ...props }) => (
                  <tr {...props} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    {children}
                  </tr>
                ),
                th: ({ children, ...props }) => (
                  <th
                    {...props}
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    {children}
                  </th>
                ),
                td: ({ children, ...props }) => (
                  <td {...props} className="px-3 py-2 text-sm">
                    {children}
                  </td>
                ),
              }}
            >
              {message.content}
            </Markdown>
          )}
        </div>
        {/* Copy button for AI messages */}
        {!isUser && (
          <button
            onClick={handleCopy}
            className=" top-2 right-2 flex items-center cursor-pointer gap-3.5 bg-accent-foreground/10 px-2 py-1 rounded-md  hover:bg-gray-100 dark:hover:bg-gray-800 transition-opacity"
            title="Copy message"
            aria-label="Copy message"
          >
            Copy {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-gray-500" />}
          </button>
        )}
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
