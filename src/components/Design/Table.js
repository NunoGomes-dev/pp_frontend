import { memo } from "react";
import { twMerge } from "tailwind-merge";

const Table = ({ className, children, ...rest }) => {
  return (
    <table className={twMerge(`w-full border-collapse ${className}`)} {...rest}>
      {children}
    </table>
  );
};

export default memo(Table);
