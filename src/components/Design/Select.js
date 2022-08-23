import { forwardRef, memo } from "react";
import { twMerge } from "tailwind-merge";

const Select = forwardRef(({ children, className, ...rest }, ref) => (
  <select
    ref={ref}
    className={twMerge(
      `min-w-[300px] bg-white text-terciary p-4 rounded-lg border border-solid border-[#E0E0E0] text-md ${className}`
    )}
    {...rest}
  >
    {children}
  </select>
));

export default memo(Select);
