import { Box, HStack } from "../../Design";
import { IoClose } from "react-icons/io5";

const ModalHeader = ({
  title,
  onClose,
  titleSize = "3xl",
  titleWeight = "600",
  ...rest
}) => {
  return (
    <HStack
      width="calc(100% - 4rem)"
      padding="2rem 2rem"
      align="center"
      background="transparent"
      justify="space-between"
      {...rest}
    >
      <Box fontSize={titleSize} fontWeight={titleWeight}>
        {title}
      </Box>
      <Box cursor="pointer" color="black" onClick={() => onClose()}>
        <IoClose />
      </Box>
    </HStack>
  );
};

export default ModalHeader;
