"use client";
import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
  Suspense,
} from "react";
import { ModalState, ModalAction } from "./modalContext.type";
import { useRouter, useSearchParams } from "next/navigation";

const initialState: ModalState = {};

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
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

const ModalContext = createContext<{
  state: ModalState;
  dispatch: React.Dispatch<ModalAction>;
} | null>(null);

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

  return { openModal, closeModal };
};
