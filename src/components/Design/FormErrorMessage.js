import { memo } from "react";
import Box from "./Box";
import { twMerge } from "tailwind-merge";

const FormErrorMessage = ({ children, className, ...rest }) => {
  if (!children) return null;

  return (
    <Box className={twMerge(`text-sm text-error ${className}`)} {...rest}>
      {children}
    </Box>
  );
};

export default memo(FormErrorMessage);
