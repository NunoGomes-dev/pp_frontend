import { memo } from "react";
import { Box } from "../../Design";

const PageBody = ({ children, className, ...others }) => {
  return (
    <Box
      className={`px-4 py-6 max-w-[calc(100% - 3rem)] ${className}`}
      {...others}
    >
      {children}
    </Box>
  );
};

export default memo(PageBody);
