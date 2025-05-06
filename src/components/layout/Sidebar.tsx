"use client";

import { Home, MessageCircle, Plus } from "lucide-react";
// import { useState } from "react";
import NavItem from "./NavItem";

export default function Sidebar() {
  // const [showChats, setShowChats] = useState(false);

  // const recentChats = [
  //   "Project AI Bot",
  //   "Meeting Notes",
  //   "Code Helper",
  //   "Job Prep",
  //   "GPT-4 Playground",
  //   "Client Feedback",
  //   "Daily Summary",
  //   "Recipe Generator",
  //   "Travel Planner",
  //   "Workout Buddy",
  //   "Language Tutor",
  //   "Book Recommendations",
  //   "Music Playlist",
  //   "Movie Suggestions",
  // ];

  return (
    <div className="h-screen w-64 flex flex-col bg-white dark:bg-[#0A0A0A] text-black dark:text-white border-r border-gray-100 dark:border-gray-700 shadow-lg">
      {/* Top + Middle */}
      <div className="flex flex-col flex-grow p-4 overflow-hidden">
        {/* Logo */}
        <div className="text-2xl font-bold mb-6 text-center tracking-tight">AIO Chat Bot</div>

        {/* Navigation */}
        <nav className="space-y-2">
          <NavItem icon={<Home size={20} />} label="Home" url="/" />
          <NavItem icon={<MessageCircle size={20} />} label="Contexts" url="/contexts" />
          <div>
            <button
              // onClick={() => setShowChats(!showChats)}
              className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {/* <div className="flex items-center gap-3">
                <MessageCircle size={20} />
                <span className="text-sm font-medium">Chats</span>
              </div> */}
              {/* {showChats ? <ChevronUp size={18} /> : <ChevronDown size={18} />} */}
            </button>
          </div>
        </nav>

        {/* Animated chat list (scrollable, bounded height) */}
        {/* <AnimatePresence>
          {
            <motion.div
              key="chatList"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 flex-grow overflow-hidden"
            >
              <div className="h-full overflow-y-auto ml-4 pr-1 space-y-1 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
                {recentChats.map((chat, index) => (
                  <button
                    key={index}
                    className="w-full text-left text-sm p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    {chat}
                  </button>
                ))}
              </div>
            </motion.div>
          }
        </AnimatePresence> */}
      </div>

      {/* Footer - always visible */}
      <div className="p-4 dark:border-gray-700">
        <button className="w-full cursor-pointer flex items-center justify-center gap-2 transition rounded-xl py-2 px-4 font-semibold border">
          <Plus size={18} />
          New Chat
        </button>
      </div>
    </div>
  );
}
