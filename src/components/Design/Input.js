import { forwardRef, memo } from "react";
import { twMerge } from "tailwind-merge";

const Input = forwardRef(({ children, className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={twMerge(
        `min-w-[300px] bg-light text-terciary p-4 rounded-md border border-solid border-[#e0e0e0] hover:bg-white focus:bg-white focus:outline-none active:bg-white ${className} `
      )}
      {...rest}
    >
      {children}
    </input>
  );
});

export default memo(Input);
