export interface SubmissionFormState {
  selectedAddress: { id: string | null; value: string };
  formData: {
    nationalId?: string;
    phoneNumber?: string;
    addressId?: string | null;
  };
}

export type SubmissionFormAction =
  | { type: "SET_ADDRESS"; payload: { id: string | null; value: string } }
  | { type: "SET_FORM_DATA"; payload: Record<string, unknown> }
  | { type: "RESET_FORM" };
