import { memo } from "react";
import { Box, HStack } from "../../Design";

const PageHeader = ({ title, className, children }) => {
  return (
    <HStack
      className={`w-full max-h-full items-center justify-between p-6 text-[#2D3748] bg-transparent ${className}`}
    >
      <Box className={"font-semibold text-3xl"}>{title}</Box>
      {children ? children : null}
    </HStack>
  );
};

export default memo(PageHeader);
