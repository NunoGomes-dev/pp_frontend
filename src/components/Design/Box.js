import { memo } from "react";
import { twMerge } from "tailwind-merge";

const Box = ({ children, className, ...p }) => {
  return (
    <div className={twMerge(`${className}`)} {...p}>
      {children}
    </div>
  );
};
export default memo(Box);
