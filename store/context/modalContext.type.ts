export interface ModalState {
  [key: string]: boolean;
}

export type ModalAction =
  | { type: "OPEN_MODAL"; payload: { modalName: string } }
  | { type: "CLOSE_MODAL"; payload: { modalName: string } }
  | { type: "TOGGLE_MODAL"; payload: { modalName: string } };
