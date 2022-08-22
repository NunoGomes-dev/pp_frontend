import { memo } from "react";
import { twMerge } from "tailwind-merge";

const HStack = ({ children, className, ...rest }) => {
  return (
    <div
      className={twMerge(
        `flex flex-col justify-start items-start gap-2 ${className}`
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default memo(HStack);
