import { memo } from "react";
import { twMerge } from "tailwind-merge";

const Grid = ({ children, className, ...rest }) => {
  return (
    <div className={twMerge(`grid ${className}`)} {...rest}>
      {children}
    </div>
  );
};

export default memo(Grid);
