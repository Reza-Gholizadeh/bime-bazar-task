import { completeOrder } from "@/gate/endpoints";
import { OrderCompletionRequest, OrderCompletionResponse } from "@/gate/type";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useOrderCompletion() {
  const router = useRouter();
  const { mutate, isPending, isError, error, isSuccess, data } = useMutation<
    OrderCompletionResponse,
    Error,
    OrderCompletionRequest
  >({
    mutationFn: completeOrder,
    onSuccess: (data: OrderCompletionResponse) => {
      console.log(data, "data");
      router.push("/orderCompletion");
    },
    onError: (error: Error) => {
      console.error("Order completion failed", error);
    },
  });

  return { mutate, isPending, isError, error, isSuccess, data };
}
