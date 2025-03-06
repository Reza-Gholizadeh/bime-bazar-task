import { completeOrder } from "@/gate/endpoints";
import { OrderCompletionRequest, OrderCompletionResponse } from "@/gate/type";
import { useMutation } from "@tanstack/react-query";

export function useOrderCompletion() {
  const { mutate, isPending, isError, error, isSuccess, data } = useMutation<
    OrderCompletionResponse,
    Error,
    OrderCompletionRequest
  >({
    mutationFn: completeOrder,
    onSuccess: (data: OrderCompletionResponse) => {
      console.log("Order completed successfully", data);
    },
    onError: (error: Error) => {
      console.error("Order completion failed", error);
    },
  });

  return { mutate, isPending, isError, error, isSuccess, data };
}
