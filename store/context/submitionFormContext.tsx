import { createContext, useContext, useReducer, ReactNode } from "react";
import {
  SubmissionFormState,
  SubmissionFormAction,
} from "./submitionFormContext.type";

const initialState: SubmissionFormState = {
  selectedAddress: { id: null, value: "" },
  formData: {},
};

const submissionFormReducer = (
  state: SubmissionFormState,
  action: SubmissionFormAction
): SubmissionFormState => {
  switch (action.type) {
    case "SET_ADDRESS":
      return { ...state, selectedAddress: action.payload };
    case "SET_FORM_DATA":
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const SubmissionFormContext = createContext<{
  state: SubmissionFormState;
  dispatch: React.Dispatch<SubmissionFormAction>;
} | null>(null);

export const SubmissionFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(submissionFormReducer, initialState);

  return (
    <SubmissionFormContext.Provider value={{ state, dispatch }}>
      {children}
    </SubmissionFormContext.Provider>
  );
};

export const useSubmissionForm = () => {
  const context = useContext(SubmissionFormContext);
  if (!context) {
    throw new Error(
      "useSubmissionForm must be used within a SubmissionFormProvider"
    );
  }
  return context;
};
