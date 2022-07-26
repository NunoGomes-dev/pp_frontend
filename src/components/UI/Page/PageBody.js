import { memo } from "react";
import { Box } from "../../Design";

const PageBody = ({ children, ...others }) => {
  return (
    <Box padding="1rem 1.5rem" maxWidth="calc(100% - 3rem)" {...others}>
      {children}
    </Box>
  );
};

export default memo(PageBody);
