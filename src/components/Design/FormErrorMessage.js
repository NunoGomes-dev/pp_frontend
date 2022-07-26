import { memo } from "react";
import Box from "./Box";

const FormErrorMessage = ({ children, ...others }) => {
  if (!children) return null;

  return (
    <Box fontSize="sm" color="error" {...others}>
      {children}
    </Box>
  );
};

export default memo(FormErrorMessage);
