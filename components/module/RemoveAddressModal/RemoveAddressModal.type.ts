export interface RemoveAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  addressTitle: string;
  fullAddress: string;
  onConfirm: ()=>void
}
