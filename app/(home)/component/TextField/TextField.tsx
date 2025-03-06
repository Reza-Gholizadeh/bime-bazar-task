import { forwardRef } from "react";
import { InputProps } from "./TextField.type";
import clsx from "clsx";

const TextField = forwardRef<HTMLInputElement, InputProps>(
  ({ isError, errorMessage, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={clsx(
            "w-full flex p-[13px] border",
            isError
              ? "border-[var(--text-feild-error-color)] text-[var(--text-feild-error-color)]"
              : "border-[var(--text-field-color)]"
          )}
          {...props}
        />
        {errorMessage && (
          <p className="text-[var(--text-feild-error-color) font-normal leading-5 text-sm">
            {errorMessage}
          </p>
        )}
      </>
    );
  }
);

TextField.displayName = "TextField";

export { TextField };
