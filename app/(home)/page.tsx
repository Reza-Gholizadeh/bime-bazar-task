import { INSURANCE, VEHICLE } from "@/constant";
import { CarDetail } from "./component/CarDetail";
import { Header } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
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
      <div>
        <Header title={VEHICLE.OWNER_DETAILS} />
      </div>
    </div>
  );
}
