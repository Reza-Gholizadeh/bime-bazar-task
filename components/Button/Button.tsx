import { forwardRef } from "react";
import { ButtonProps } from "./Button.type";
import clsx from "clsx";
import { SpinerIcon } from "@/assets/icon";

const variants = {
  light: "bg-white text-black border border-black cursor-pointer",
  dark: "bg-black text-white cursor-pointer",
  secondary:
    "bg-[var(--loading-gray)] bg-[var(--loading-text-gray)] cursor-not-allowed",
  disabled:
    "bg-[var(--custom-gray)] bg-[var(--disable-text-gray)] cursor-not-allowed",
  primary: "bg-[var(--primary)] w-full text-black cursor-pointer",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, isLoading, disabled, children, variant = "dark", ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "relative flex items-center font-medium justify-center px-[26px] py-3 ",
          variants[variant],
          className
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="opacity-0">{children}</span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <SpinerIcon />
            </span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
