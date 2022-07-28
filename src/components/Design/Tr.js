import { memo } from "react";

const Tr = ({ className, children, ...rest }) => {
  return (
    <tr className={`bg-white ${className}`} {...rest}>
      {children}
    </tr>
  );
};

export default memo(Tr);
