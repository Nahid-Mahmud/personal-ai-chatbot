import { ChatHeader } from "@/components/chat/ChatHeader";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import type React from "react"; // Import React

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <div className="min-h-screen bg-background">
          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden  fixed left-4 top-4 z-50">
              <Button className="bg-white  border" size="icon">
                <Menu className="h-6 w-6 text-black bg-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0 bg-white">
              <Sidebar />
            </SheetContent>
          </Sheet>

          {/* Desktop Nav */}
          <div className="hidden lg:block fixed inset-y-0 bg-[#ffffff] text-black left-0 w-64  ">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="lg:pl-64 overflow-y-hidden">
            <main className="flex flex-col h-screen overflow-hidden ">
              <ChatHeader />
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
