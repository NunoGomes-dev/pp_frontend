import { memo } from "react";
import Box from "./Box";
import { twMerge } from "tailwind-merge";

const Card = ({ children, className, ...p }) => {
  return (
    <Box
      className={twMerge(
        `border border-[#E0E0E0] rounded-lg bg-white p-4 ${className}`
      )}
      {...p}
    >
      {children}
    </Box>
  );
};

export default memo(Card);
