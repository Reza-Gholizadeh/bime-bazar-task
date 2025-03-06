"use client";
import { ReactNode, useReducer, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  initialState,
  ModalContext,
  modalReducer,
} from "@/store/context/modalsContext";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const searchParams = useSearchParams();

  useEffect(() => {
    const modalQuery = searchParams.get("modal") || "";
    if (!modalQuery) {
      Object.keys(state).forEach((modalName) => {
        if (state[modalName]) {
          dispatch({ type: "CLOSE_MODAL", payload: { modalName } });
        }
      });
    }
  }, [searchParams.toString()]);

  return (
    <Suspense>
      <ModalContext.Provider value={{ state, dispatch }}>
        {children}
      </ModalContext.Provider>
    </Suspense>
  );
};
