"use client";
import { ADDRESS, BUTTONS, DRIVER } from "@/constant";
import { TextField } from "../TextField";
import { Button } from "@/components";
import { useEffect, useState } from "react";
import { address } from "../AddressModal/AddressModal.type";
import { AddressModal } from "../AddressModal";
import { useForm } from "react-hook-form";
import { driverFormSchema, type DriverFormData } from "./validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useOrderCompletion } from "@/hooks";
import { OrderCompletionRequest } from "@/gate/type";
import { useSubmissionForm } from "@/store/context/submitionFormContext";

export const Form = () => {
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const { state, dispatch } = useSubmissionForm();

  const { mutate } = useOrderCompletion();
  const handleCloseModal = () => {
    setOpenAddressModal(false);
  };

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors, isSubmitted },
  } = useForm<DriverFormData>({
    mode: "onBlur",
    resolver: zodResolver(driverFormSchema),
    defaultValues: {
      nationalId: state.formData.nationalId || "",
      phoneNumber: state.formData.phoneNumber || "",
      addressId: state.selectedAddress.id,
    },
  });

  const handleSelectAddress = (param: address) => {
    dispatch({
      type: "SET_ADDRESS",
      payload: { id: param.id, value: param.fullAddress },
    });
    setValue("addressId", param.id);
  };

  const onSubmit = async (data: DriverFormData) => {
    try {
      const validatedData = driverFormSchema.parse({
        ...data,
        address: state.selectedAddress,
      });
      mutate(validatedData as OrderCompletionRequest);
      dispatch({ type: "SET_FORM_DATA", payload: validatedData });
    } catch (error) {
      console.error("Validation error:", error);
    }
  };
  useEffect(() => {
    dispatch({
      type: "SET_FORM_DATA",
      payload: {
        nationalId: watch("nationalId"),
        phoneNumber: watch("phoneNumber"),
        addressId: watch("addressId"),
      },
    });
  }, [watch("nationalId"), watch("phoneNumber"), watch("addressId")]);

  const nationalIdValue = watch("nationalId");
  const phoneNumberValue = watch("phoneNumber");
  const emptyForm =
    !nationalIdValue || !phoneNumberValue || !state.selectedAddress.id;

  return (
    <>
      <form
        className="flex-start flex-col gap-6 gorw px-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-start flex-col gap-1.5 w-full">
          <h3 className="font-medium text-base leading-7">
            {DRIVER.ENTER_PERSONAL_INFO}
          </h3>
          <TextField
            placeholder={DRIVER.NATIONAL_ID}
            {...register("nationalId", { onBlur: () => trigger("nationalId") })}
            isError={!!errors.nationalId}
            errorMessage={errors.nationalId?.message}
          />
          <TextField
            placeholder={DRIVER.PHONE_NUMBER}
            {...register("phoneNumber", {
              onBlur: () => trigger("phoneNumber"),
            })}
            isError={!!errors.phoneNumber}
            errorMessage={errors.phoneNumber?.message}
          />
        </div>
        <div className="flex-start flex-col gap-1.5 w-full">
          <h3 className="font-medium text-base leading-7">
            {ADDRESS.FOR_INSURANCE}
          </h3>
          <p
            className={clsx("font-normal text-sm leading-7", {
              "text-red-500": isSubmitted && !state.selectedAddress.id,
            })}
          >
            {state.selectedAddress.id
              ? state.selectedAddress.value
              : ADDRESS.NOTE}
          </p>

          <Button
            variant="primary"
            type="button"
            onClick={() => setOpenAddressModal(true)}
          >
            {ADDRESS.CHOOSE}
          </Button>
        </div>
        <div className="flex w-full items-center justify-end">
          <Button type="submit" variant="dark" disabled={emptyForm}>
            {BUTTONS.SUBMIT}
          </Button>
        </div>
      </form>
      <AddressModal
        isOpen={openAddressModal}
        onClose={handleCloseModal}
        selectAddress={handleSelectAddress}
        selectedAddress={
          {
            id: state.selectedAddress.id,
            fullAddress: state.selectedAddress.value,
          } as address
        }
      />
    </>
  );
};
