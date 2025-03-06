import { ReactNode } from "react";
import { CarDetailComponents } from "./CarDetail.type";
import { CarPlate } from "@/assets/icon";

export const CarDetail = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col px-10 py-6 gap-6">{children}</div>;
};

CarDetail.Row = (({ label, value }) => (
  <div className="flex flex-row-reverse items-center gap-2 w-full">
    <span className="text-right font-normal text-sm leading-5">{value}</span>
    <div className="flex-1 border-t border-dotted border text-light "></div>
    <span className="font-normal text-sm leading-5 text-gray ">{label}</span>
  </div>
)) as CarDetailComponents["Row"];

CarDetail.Row.displayName = "CarDetail.Row";

CarDetail.Plate = (() => (
  <div className="flex items-center justify-center">
    <CarPlate />
  </div>
)) as CarDetailComponents["Plate"];

CarDetail.Plate.displayName = "CarDetail.Plate";
