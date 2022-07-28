import { forwardRef, memo } from "react";

const Select = forwardRef(({ children, className, ...rest }, ref) => (
  <select
    ref={ref}
    className={`min-w-[300px] bg-white text-terciary p-4 rounded-lg border border-solid border-[#E0E0E0] ${className}`}
    {...rest}
  >
    {children}
  </select>
));

export default memo(Select);
