import { memo } from "react";

const Table = ({ className, children, ...rest }) => {
  return (
    <table className={`w-full border-collapse ${className}`} {...rest}>
      {children}
    </table>
  );
};

export default memo(Table);
