import { Box, HStack } from "../Design";
import { IoClose } from "react-icons/io5";

const ModalHeader = ({ title, onClose, ...rest }) => {
  return (
    <HStack
      width="calc(100% - 2rem)"
      padding="1rem"
      align="center"
      background="transparent"
      justify="space-between"
      {...rest}
    >
      <Box fontSize="4xl">{title}</Box>
      <Box cursor="pointer" color="black" onClick={() => onClose()}>
        <IoClose />
      </Box>
    </HStack>
  );
};

export default ModalHeader;
