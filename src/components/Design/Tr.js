import { memo } from "react";
import { twMerge } from "tailwind-merge";

const Tr = ({ className, children, ...rest }) => {
  return (
    <tr className={twMerge(`bg-white ${className}`)} {...rest}>
      {children}
    </tr>
  );
};

export default memo(Tr);
