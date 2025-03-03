import { forwardRef } from "react";
import { InputProps } from "./TextField.type";
import clsx from "clsx";

const TextField = forwardRef<HTMLInputElement, InputProps>(
  ({ isError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "w-full flex p-[13px] border",
          isError
            ? "border-[var(--text-feild-error-color)] placeholder-[var(--text-feild-error-color)]"
            : "border-[var(--text-field-color)]"
        )}
        {...props}
      />
    );
  }
);

TextField.displayName = "TextField";

export { TextField };
