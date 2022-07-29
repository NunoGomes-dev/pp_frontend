import { memo } from "react";

const Th = ({ className, children, ...rest }) => {
  return (
    <th
      className={`bg-primaryLight text-left px-4 py-0 font-medium border-y h-[50px] border-x-0 border-primary border-solid first:w-[5px] first:whitespace-nowrap first:border-l last:border-r ${className}`}
      {...rest}
    >
      {children}
    </th>
  );
};

export default memo(Th);
