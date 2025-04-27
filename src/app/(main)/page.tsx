import { ChatInterface } from "@/components/chat/ChatInterface";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      {/* Mobile Nav */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden  fixed left-4 top-4 z-50">
          <Button className="bg-white  border" size="icon">
            <Menu className="h-6 w-6 text-black bg-white" />

            {/* <span className="sr-only">Toggle navigation menu</span> */}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0 bg-white border-red-400 border">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Desktop Nav */}
      <div className="hidden lg:block fixed inset-y-0 text-black left-0 w-64  bg-card  border">
        <Sidebar />
      </div>

      <ChatInterface />
    </div>
  );
}
