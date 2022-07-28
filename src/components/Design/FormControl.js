import { memo } from "react";
import VStack from "./VStack";

const FormControl = ({ children, className, ...rest }) => {
  return (
    <VStack className={`gap-2 ${className}`} {...rest}>
      {children}
    </VStack>
  );
};
export default memo(FormControl);
