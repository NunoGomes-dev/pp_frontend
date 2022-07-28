import { memo } from "react";

const Td = ({ className, children, ...rest }) => {
  return (
    <td
      className={`font-normal text-md text-left px-4 py-0 whitespace-nowrap overflow-hidden text-ellipsis border-y border-x-0 border-primary border-solid first:w-[5px] first:whitespace-nowrap first:border-l last:border-r ${className}`}
      {...rest}
    >
      {children}
    </td>
  );
};

export default memo(Td);
