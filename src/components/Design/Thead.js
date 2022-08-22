import { memo } from "react";
import { twMerge } from "tailwind-merge";

const Thead = ({ className, children, ...rest }) => {
  return (
    <thead className={twMerge(`w-full ${className}`)} {...rest}>
      {children}
    </thead>
  );
};

export default memo(Thead);
