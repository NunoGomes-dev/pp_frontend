import { memo } from "react";

const HStack = ({ children, className, ...p }) => {
  return (
    <div
      className={`flex flex-row justify-start items-start gap-2 ${className}`}
      {...p}
    >
      {children}
    </div>
  );
};

export default memo(HStack);
