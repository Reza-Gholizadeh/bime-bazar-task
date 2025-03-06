"use client";
import { useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ModalContext } from "@/store/context/modalsContext";

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const useModalActions = () => {
  const { dispatch } = useModal();
  const router = useRouter();
  const searchParams = useSearchParams();

  const openModal = (modalName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("modal", modalName);
    router.push(`?${params.toString()}`);
    dispatch({ type: "OPEN_MODAL", payload: { modalName } });
  };

  const closeModal = (modalName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");
    router.push(`?${params.toString()}`);
    dispatch({ type: "CLOSE_MODAL", payload: { modalName } });
  };

  const toggleModal = (modalName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const isOpen = params.get("modal") === modalName;

    if (isOpen) {
      closeModal(modalName);
    } else {
      openModal(modalName);
    }
  };

  return { openModal, closeModal, toggleModal };
};
