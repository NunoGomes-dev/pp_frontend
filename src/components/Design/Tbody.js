import { memo } from "react";
import { twMerge } from "tailwind-merge";

const Tbody = ({ className, children, ...rest }) => {
  return (
    <tbody className={twMerge(`w-full ${className}`)} {...rest}>
      {children}
    </tbody>
  );
};

export default memo(Tbody);
