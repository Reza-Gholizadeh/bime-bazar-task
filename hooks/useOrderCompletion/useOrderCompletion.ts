'use client'
import { MODALS } from "@/constant";
import { completeOrder } from "@/gate/endpoints";
import { OrderCompletionRequest, OrderCompletionResponse } from "@/gate/type";
import { useModal, useModalActions } from "@/store/context/modalsContext";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useOrderCompletion() {
  const { openModal, closeModal } = useModalActions();
  const { state: modalState } = useModal();

  const router = useRouter();
  const { mutate, isPending, isError, error, isSuccess, data } = useMutation<
    OrderCompletionResponse,
    Error,
    OrderCompletionRequest
  >({
    mutationFn: completeOrder,
    onSuccess: () => {
      if (!!modalState[MODALS.FAILD_ORDER]) {
        closeModal(MODALS.FAILD_ORDER);
      }
      router.push("/orderCompletion");
    },
    onError: (error: Error) => {
      openModal(MODALS.FAILD_ORDER);
      console.error("Order completion failed", error);
    },
  });

  return { mutate, isPending, isError, error, isSuccess, data };
}
