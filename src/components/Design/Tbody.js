import { memo } from "react";

const Tbody = ({ className, children, ...rest }) => {
  return (
    <tbody className={`w-full ${className}`} {...rest}>
      {children}
    </tbody>
  );
};

export default memo(Tbody);
