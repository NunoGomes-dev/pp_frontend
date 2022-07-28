import { memo } from "react";
import Box from "./Box";

const Card = ({ children, className, ...p }) => {
  return (
    <Box
      className={`border border-[#E0E0E0] rounded-lg bg-white p-4 ${className}`}
      {...p}
    >
      {children}
    </Box>
  );
};

export default memo(Card);
