import { memo } from "react";
import Box from "./Box";

const FormErrorMessage = ({ children, className, ...rest }) => {
  if (!children) return null;

  return (
    <Box className={`text-sm text-error ${className}`} {...rest}>
      {children}
    </Box>
  );
};

export default memo(FormErrorMessage);
