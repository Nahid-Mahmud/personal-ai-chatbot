import { ChatInterface } from "@/components/chat/ChatInterface";


export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      <ChatInterface />
    </div>
  );
}
