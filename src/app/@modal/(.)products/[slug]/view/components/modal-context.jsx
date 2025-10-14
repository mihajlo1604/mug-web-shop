"use client";

import { useRouter } from "next/navigation";
import { createContext, use, useCallback } from "react";
export const ModalContext = createContext(null);
export function ModalProvider({
  children
}) {
  const router = useRouter();
  const handleClose = useCallback(() => {
    router.back();
  }, [router]);
  return <ModalContext value={{
    handleClose
  }}>{children}</ModalContext>;
}
export function useModal() {
  const context = use(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}