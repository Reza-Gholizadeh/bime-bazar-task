"use client";
import { FormValidate } from "@/assets/icon";
import { Button, CarDetail } from "@/components";
import { BUTTONS, INSURANCE, STATES, VEHICLE } from "@/constant";
import { useRouter } from "next/navigation";

export default function OrderCompletion() {
  const router = useRouter();
  return (
    <div
      className="flex flex-col justify-between pt-6"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="flex-center flex-col gap-8 ">
        <div className="flex-center flex-col">
          <FormValidate />
          <h3>{STATES.ORDER_COMPLETE}</h3>
        </div>
        <CarDetail>
          <CarDetail.Plate />
          <div className="flex flex-col gap-1.5">
            <CarDetail.Row
              label={INSURANCE.COMPANY_NAME}
              value={INSURANCE.COMPANY}
            />
            <CarDetail.Row label={VEHICLE.BRAND} value={VEHICLE.COMPANY} />
            <CarDetail.Row label={VEHICLE.MODEL} value={VEHICLE.DETAIL} />
          </div>
        </CarDetail>
      </div>
      <div className="px-[18px] self-end">
        <Button variant="dark" onClick={router.back}>
          {BUTTONS.BACK}
        </Button>
      </div>
    </div>
  );
}
