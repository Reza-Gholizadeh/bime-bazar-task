"use client";

import React from "react";
import { createPortal } from "react-dom";
import { Close } from "@/assets/icon";
import { BottomSheetProps } from "./BottomSheet.type";
import { motion, AnimatePresence } from "framer-motion";
import { useBottomSheetLogic } from "@/hooks";

export function BottomSheet({
  isOpen,
  onClose,
  title,
  children,
}: BottomSheetProps) {
  const { mounted } = useBottomSheetLogic(isOpen);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 transition-opacity"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full max-w-md bg-white rounded-t-lg shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{title}</h3>
              <button onClick={onClose}>
                <Close />
              </button>
            </div>
            <div className="mt-2">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
