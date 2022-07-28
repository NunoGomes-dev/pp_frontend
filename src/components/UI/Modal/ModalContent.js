import { memo } from "react";
import { VStack } from "../../Design";

const ModalContent = ({ children, className, ...rest }) => (
  <VStack
    className={`fixed min-w-[30%] max-w-[85%] top-1/2 left-1/2 bg-white rounded-lg gap-0 shadow-md ${className}`}
    style={{ transform: "translate(-50%, -50%)", zIndex: 1000 }}
    {...rest}
  >
    {children}
  </VStack>
);

export default memo(ModalContent);
