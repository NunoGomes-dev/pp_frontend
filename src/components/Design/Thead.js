import { memo } from "react";

const Thead = ({ className, children, ...rest }) => {
  return (
    <thead className={`w-full ${className}`} {...rest}>
      {children}
    </thead>
  );
};

export default memo(Thead);
