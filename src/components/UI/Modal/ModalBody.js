import { memo } from "react";
import { Box } from "../../Design";

const ModalBody = ({ children, className, ...rest }) => (
  <Box className={`${className}`} {...rest}>
    {children}
  </Box>
);

export default memo(ModalBody);
