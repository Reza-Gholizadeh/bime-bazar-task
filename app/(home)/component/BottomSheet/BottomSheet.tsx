"use client";

import React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Close } from "@/assets/icon";
import { BottomSheetProps } from "./BottomSheet.type";

export function BottomSheet({
  isOpen,
  onClose,
  title,
  children,
}: BottomSheetProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white shadow-lg animate-in slide-in-from-bottom"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b p-4 rtl:text-right">
          <h2 className="text-lg font-medium">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100"
            aria-label="Close"
          >
            <Close />
          </button>
        </div>
        <div className="max-h-[80vh] overflow-auto">{children}</div>
      </div>
    </div>,
    document.body
  );
}
