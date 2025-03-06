import { ChangeEvent, ReactNode } from "react";

export interface RowProps {
  leftIcon: ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  id: string;
  onRadioChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDelete: (id: string) => void;
}
