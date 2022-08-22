import { memo } from "react";
import VStack from "./VStack";
import { twMerge } from "tailwind-merge";

const FormControl = ({ children, className, ...rest }) => {
  return (
    <VStack className={twMerge(`gap-2 ${className}`)} {...rest}>
      {children}
    </VStack>
  );
};
export default memo(FormControl);
