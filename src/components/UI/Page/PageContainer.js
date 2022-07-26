import { memo } from "react";
import { VStack } from "../../Design";

const PageContainer = ({ children, ...others }) => {
  return (
    <VStack width="full" height="full" gap="0" {...others}>
      {children}
    </VStack>
  );
};

export default memo(PageContainer);
