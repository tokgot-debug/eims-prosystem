import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useEIMS() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useEIMS must be used within an AppProvider");
  }
  return context;
}
