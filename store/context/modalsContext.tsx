import { createContext } from "react";
import { ModalAction, ModalState } from "./modalContext.type";

export const initialState: ModalState = {};

export const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, [action.payload.modalName]: true };
    case "CLOSE_MODAL":
      return { ...state, [action.payload.modalName]: false };
    case "TOGGLE_MODAL":
      return {
        ...state,
        [action.payload.modalName]: !state[action.payload.modalName],
      };
    default:
      return state;
  }
};

export const ModalContext = createContext<{
  state: ModalState;
  dispatch: React.Dispatch<ModalAction>;
} | null>(null);
