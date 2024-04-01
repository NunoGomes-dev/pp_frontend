import { memo } from "react";
import { twMerge } from "tailwind-merge";

const HStack = ({ children, className, ...p }) => {
  return (
    <div
      className={twMerge(
        `flex flex-row justify-start items-start gap-2 ${className}`
      )}
      {...p}
    >
      {children}
    </div>
  );
};

export default memo(HStack);
