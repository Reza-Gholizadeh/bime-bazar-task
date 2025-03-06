import React from "react";
import { RowProps } from "./Row.type";
import { useModalActions } from "@/hooks/useModal";
import { MODALS } from "@/constant";

export const Row = ({
  leftIcon,
  title,
  description,
  isSelected,
  id,
  onRadioChange,
  handleDelete,
}: RowProps) => {
  const { openModal } = useModalActions();

  const handClick = () => {
    handleDelete(id);
    openModal(MODALS.DELETE_ADDRESS);
  };
  return (
    <div className="flex items-start p-4 rounded-lg mb-3  transition-colors">
      <label className="ml-3 flex items-center">
        <input
          type="radio"
          checked={isSelected}
          onChange={onRadioChange}
          className="h-5 w-5 accent-black"
          id={id}
        />
      </label>
      <div className="flex-1">
        <p className="font-medium text-sm leading-5  mb-1">{title}</p>
        <p className="font-normal text-xs leading-4">{description}</p>
      </div>
      <div className="mr-3 text-gray-600" onClick={handClick}>
        {leftIcon}
      </div>
    </div>
  );
};
