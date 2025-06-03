import Footer from "@/components/home/Footer";
import HomePageHeader from "@/components/home/HomePageHeader";
import React from "react";

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
