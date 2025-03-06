import { BottomSheet } from "../BottomSheet";
import { BUTTONS, STATES } from "@/constant";
import { Button } from "@/components";
import { FaildOrderMoadlProps } from "./FaildOrderModal.type";
import { useOrderCompletion } from "@/hooks";

export const FaildOrderModal = ({
  isOpen,
  onClose,
  nationalId,
  addressId,
  phoneNumber,
}: FaildOrderMoadlProps) => {
  const { mutate } = useOrderCompletion();
  const handleTryClick = () => {
    mutate({ nationalId, addressId, phoneNumber });
  };
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-2 pt-2.5">
        <div className="flex-start flex-col gap-4 py-2 px-3">
          <p className="font-medium text-sm leading-5">
            {STATES.ORDER_COMPLETE}
          </p>
          <p className="font-medium text-sm leading-5">{STATES.TRY_AGAIN}</p>
        </div>
        <div className="flex gap-2.5 shadow p-2.5">
          <Button variant="dark" onClick={handleTryClick} className="w-full">
            {BUTTONS.TRY}
          </Button>
          <Button variant="light" onClick={onClose} className="w-full">
            {BUTTONS.BACK}
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
};
