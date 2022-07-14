import { VStack } from "../Design";

const ModalContent = ({ children, ...rest }) => (
  <VStack
    position="fixed"
    minWidth="30%"
    maxWidth="85%"
    maxHeight="85%"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
    background="white"
    borderRadius="8px"
    zIndex={1000}
    gap="0"
    style={{ boxShadow: "0 10px 20px rgba(black, 0.2)" }}
    {...rest}
  >
    {children}
  </VStack>
);

export default ModalContent;
