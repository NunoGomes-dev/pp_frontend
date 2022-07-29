import { memo } from "react";

const Box = ({ children, className, ...p }) => {
  return (
    <div className={`${className}`} {...p}>
      {children}
    </div>
  );
};
export default memo(Box);
