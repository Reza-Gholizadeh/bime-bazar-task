import { HeaderProps } from "./Header.type";
import { CarIcon } from "@/assets/icon/CarIcon";

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex items-start gap-1.5 px-2 py-3 shadow">
      <CarIcon />
      <h1 className="font-medium text-lg leading-7">{title}</h1>
    </header>
  );
};
