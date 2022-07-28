import { memo } from "react";

const HStack = ({ children, className, ...rest }) => {
  return (
    <div
      className={`flex flex-col justify-start items-start ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default memo(HStack);
