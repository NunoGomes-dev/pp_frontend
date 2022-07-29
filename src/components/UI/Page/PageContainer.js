import { memo } from "react";
import { VStack } from "../../Design";

const PageContainer = ({ children, className, ...others }) => {
  return (
    <VStack className={`w-full h-full gap-0 ${className}`} {...others}>
      {children}
    </VStack>
  );
};

export default memo(PageContainer);
