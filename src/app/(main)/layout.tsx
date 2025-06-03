import Footer from "@/components/home/Footer";
import HomePageHeader from "@/components/home/HomePageHeader";
import React from "react";

// seo

export const metadata = {
  title: "AIO Chat - All-in-One AI Conversation Platform",
  description:
    "AIO Chat is the ultimate platform for intelligent AI conversations, combining multiple AI models, customizable contexts, and powerful conversation management into one seamless experience.",
  keywords: ["AI chat", "AI conversation", "AI models", "context management"],
  openGraph: {
    title: "AIO Chat - All-in-One AI Conversation Platform",
    description:
      "AIO Chat is the ultimate platform for intelligent AI conversations, combining multiple AI models, customizable contexts, and powerful conversation management into one seamless experience.",
    url: "https://aio.chat.nahid-mahmud.xyz",
    siteName: "AIO Chat",
    images: [
      {
        url: "./aio-cropped.png",
        width: 1200,
        height: 630,
        alt: "AIO Chat - All-in-One AI Conversation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIO Chat - All-in-One AI Conversation Platform",
    description:
      "AIO Chat is the ultimate platform for intelligent AI conversations, combining multiple AI models, customizable contexts, and powerful conversation management into one seamless experience.",
    images: ["./aio-cropped.png"],
  },
};

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:text-white ">
      <HomePageHeader />
      {children}
      <Footer />
    </div>
  );
}

export default HomePageLayout;
