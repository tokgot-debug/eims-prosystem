"use client";
import React, { createContext, useState } from "react";
import { INITIAL_CLAIMS, INITIAL_POLICIES } from "../lib/constants";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeView, setActiveView] = useState("landing-page");
  const [claims, setClaims] = useState(INITIAL_CLAIMS);
  const [policies, setPolicies] = useState(INITIAL_POLICIES);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigateToView = (viewId) => {
    setActiveView(viewId);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        activeView,
        navigateToView,
        claims,
        setClaims,
        policies,
        setPolicies,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
