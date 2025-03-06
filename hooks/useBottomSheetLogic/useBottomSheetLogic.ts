'use client'
import { useEffect, useState } from "react";

export function useBottomSheetLogic(isOpen: boolean) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return { mounted };
}
