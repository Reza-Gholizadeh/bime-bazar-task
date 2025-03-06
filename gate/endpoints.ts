import client from "./client";
import type {
  Address,
  OrderCompletionRequest,
  OrderCompletionResponse,
} from "./type";

export const getAddresses = async (): Promise<Address[]> => {
  try {
    const { data } = await client.get<Address[]>("/my-addresses/", {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const completeOrder = async (
  payload: OrderCompletionRequest
): Promise<OrderCompletionResponse> => {
  try {
    console.log("Sending order completion request with payload:", payload);

    const { data } = await client.post<OrderCompletionResponse>(
      "/order/completion/",
      payload,
      {
        withCredentials: true,
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
};
