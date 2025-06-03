import ReduxProvider from "@/components/providers/ReduxProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        url: "/aio-cropped.png",
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
    images: ["/aio-cropped.png"],
    creator: "@nm_nahid01",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <ReduxProvider>
            {" "}
            {children}
            <ToastContainer position="top-right" />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
