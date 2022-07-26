import { memo } from "react";
import Box from "./Box";

const Card = ({ children, ...others }) => {
  return (
    <Box
      border="1px solid #E0E0E0"
      bg="white"
      rounded="md"
      padding={4}
      {...others}
    >
      {children}
    </Box>
  );
};

export default memo(Card);
