"use client";
import { RedClose } from "@/assets/icon";
import { BottomSheet, Button, RemoveAddressModal, Row } from "@/components";
import { AddressSelectorProps } from "./AddressModal.type";
import { ADDRESS, BUTTONS, MODALS, STATES } from "@/constant";
import { useModal, useModalActions } from "@/hooks/useModal";
import { Fragment, useState } from "react";
import { useLocalStorageAddresses } from "@/hooks";

export function AddressModal({
  isOpen,
  onClose,
  selectAddress,
  selectedAddress,
}: AddressSelectorProps) {
  const { addresses, isLoading, error, removeAddress } =
    useLocalStorageAddresses(isOpen);

  const { closeModal } = useModalActions();
  const { state: modalState } = useModal();
  const [deletingAddressId, setDeletingAddressId] = useState<string | null>(
    null
  );
  const handleSetDeletingAddress = (id: string) => {
    setDeletingAddressId(id);
  };
  if (error) {
    return <div>مجدد تلاش کنید</div>;
  }
  const handleClose = () => {
    selectAddress({ fullAddress: "", id: "" });
    onClose();
  };
  const deletingAddress = addresses?.find(
    (addr) => addr.id === deletingAddressId
  );
  const handleConfirmDelete = () => {
    if (deletingAddressId) {
      if (deletingAddressId === selectedAddress?.id) {
        selectAddress({ fullAddress: "", id: "" });
      }
      removeAddress(deletingAddressId);
      setDeletingAddressId(null);
      closeModal(MODALS.DELETE_ADDRESS);
    }
  };

  return (
    <>
      <BottomSheet
        isOpen={isOpen}
        onClose={handleClose}
        title={ADDRESS.SELECT_ADDRESS}
      >
        {isLoading ? (
          <div className="h-36">{STATES.LOAD_ADDRESS}</div>
        ) : (
          <>
            <div className="flex flex-col">
              {addresses?.map((address) => (
                <Fragment key={address.id}>
                  <Row
                    id={address.id}
                    leftIcon={<RedClose />}
                    title={address.name}
                    description={address.details}
                    isSelected={selectedAddress?.id === address.id}
                    onRadioChange={() => {
                      selectAddress({
                        fullAddress: address.details,
                        id: address.id,
                      });
                    }}
                    handleDelete={handleSetDeletingAddress}
                  />
                </Fragment>
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
      {modalState[MODALS.DELETE_ADDRESS] && (
        <RemoveAddressModal
          isOpen={!!modalState[MODALS.DELETE_ADDRESS]}
          onClose={() => closeModal(MODALS.DELETE_ADDRESS)}
          addressTitle={deletingAddress?.name as string}
          fullAddress={deletingAddress?.details as string}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
}
