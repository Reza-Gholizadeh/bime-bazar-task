import { Address } from "cluster";

export type address = {
  fullAddress: string;
  id: string;
};

export interface AddressSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (addressId: string) => void;
  addresses?: Address[];
  onDelete?: (addressId: string) => void;
  selectAddress: (param: address) => void;
  selectedAddress: address | null;
}
