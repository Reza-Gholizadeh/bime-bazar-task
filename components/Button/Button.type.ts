import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "light" | "dark" | "secondary" | "disabled" | "primary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}
