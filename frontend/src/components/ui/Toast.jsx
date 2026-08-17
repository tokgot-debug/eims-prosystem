"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ToastContext = createContext(() => {});

export const useToast = () => useContext(ToastContext);

let nextId = 1;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const push = useCallback((title, body, tone = "info") => {
    const id = nextId++;
    setToasts((t) => [...t, { id, title, body, tone }]);
    return id;
  }, []);

  const dismiss = useCallback((id) => setToasts((t) => t.filter((x) => x.id !== id)), []);

  return (
    <ToastContext.Provider value={push}>
      {children}
      <div id="toast-container" role="status" aria-live="polite">
        {toasts.map((t) => (
          <Toast key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function Toast({ toast, onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 4200);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div className={`toast ${toast.tone}`}>
      <div className="toast-body">
        <strong>{toast.title}</strong>
        <span>{toast.body}</span>
      </div>
      <button className="toast-close" onClick={onDismiss} aria-label="Dismiss">&times;</button>
    </div>
  );
}
