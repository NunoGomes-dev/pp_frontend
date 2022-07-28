import { memo } from "react";

const Grid = ({ children, className, ...rest }) => {
  return (
    <div className={`grid ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default memo(Grid);
