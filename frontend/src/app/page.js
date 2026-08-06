"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ViewContainer from "@/components/views/ViewContainer";
import NewPolicyModal from "@/components/modals/NewPolicyModal";

function MainApp() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.setupViewNavigation) {
      window.setupViewNavigation();
    }
  }, []);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-main">
        <Header />
        <main className="content-area">
          <ViewContainer />
        </main>
      </div>
      <NewPolicyModal />
      <Script src="/app.js" strategy="afterInteractive" />
    </div>
  );
}

export default function Home() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
