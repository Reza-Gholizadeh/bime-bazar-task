export interface Address {
  id: string;
  details: string;
  name: string;
}

export interface OrderCompletionRequest {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

export interface OrderCompletionResponse {
  success: boolean;
  orderId: string;
  trackingNumber: string;
}
