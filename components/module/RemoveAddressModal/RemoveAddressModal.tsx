import { BottomSheet, Button } from "@/components/ui";
import { ADDRESS, BUTTONS } from "@/constant";
import { RemoveAddressModalProps } from "./RemoveAddressModal.type";

export const RemoveAddressModal = ({
  isOpen,
  onClose,
  addressTitle,
  fullAddress,
  onConfirm
}: RemoveAddressModalProps) => {
  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      title={ADDRESS.REMOVE_ADDRESS}
    >
      <div className="flex flex-col px-3 py-2 gap-4">
        <p className="font-medium text-sm leading-5">{ADDRESS.REMOVE_NOTICE}</p>
        <div className="p-2 background-gray flex flex-col">
          <p className="font-medium text-sm leading-5">{addressTitle}</p>
          <p className="font-normal text-xs text-light-gray">{fullAddress}</p>
        </div>
      </div>
      <div className="flex gap-2.5 shadow p-2.5">
        <Button variant="dark" onClick={onConfirm} className="w-full">
          {BUTTONS.APPROVE}
        </Button>
        <Button variant="light" onClick={onClose} className="w-full">
          {BUTTONS.BACK}
        </Button>
      </div>
    </BottomSheet>
  );
};
