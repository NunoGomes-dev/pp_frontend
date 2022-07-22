import { memo } from "react";
import VStack from "./VStack";

const FormControl = ({ children, ...rest }) => {
  return (
    <VStack justify="start" align="start" {...rest}>
      {children}
    </VStack>
  );
};
export default memo(FormControl);
