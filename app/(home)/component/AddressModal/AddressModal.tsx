import { BottomSheet } from "../BottomSheet";
import { Row } from "../Row";
import { RedClose } from "@/assets/icon";
import { useAddresses } from "@/hooks";
import { Button } from "@/components";
import { AddressSelectorProps } from "./AddressModal.type";
import { ADDRESS, BUTTONS, STATES } from "@/constant";

export function AddressModal({
  isOpen,
  onClose,
  selectAddress,
  selectedAddress,
}: AddressSelectorProps) {
  const { data: addresses, isLoading, error } = useAddresses(isOpen);

  if (error) {
    return <div>مجدد تلاش کنید</div>;
  }

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      title={ADDRESS.SELECT_ADDRESS}
    >
      {isLoading ? (
        <div className="h-36">{STATES.LOAD_ADDRESS}</div>
      ) : (
        <>
          <div className="flex flex-col">
            {addresses?.map((address) => (
              <Row
                key={address.id}
                id={address.id}
                leftIcon={<RedClose />}
                title={address.name}
                description={address.details}
                isSelected={selectedAddress?.id === address.id}
                onRadioChange={() => {
                  console.log(address, "addresswwww");
                  selectAddress({
                    fullAddress: address.details,
                    id: address.id,
                  });
                }}
              />
            ))}
          </div>
          <div className="shadow-[0_3px_15px_3px_rgba(34,34,34,0.1)] p-4">
            <Button
              type="button"
              variant={selectedAddress?.id ? "dark" : "disabled"}
              className="w-full"
              onClick={(e: { stopPropagation: () => void }) => {
                e.stopPropagation();
                onClose();
              }}
            >
              {BUTTONS.SELECT}
            </Button>
          </div>
        </>
      )}
    </BottomSheet>
  );
}
