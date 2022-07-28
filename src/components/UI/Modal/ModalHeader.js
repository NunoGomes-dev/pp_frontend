import { Box, HStack } from "../../Design";
import { IoClose } from "react-icons/io5";
import { memo } from "react";

const ModalHeader = ({
  title,
  onClose,
  className,
  titleSize = "3xl",
  titleWeight = "600",
  ...rest
}) => {
  return (
    <HStack
      className={`w-full p-8 items-center bg-transparent justify-between ${className}`}
      {...rest}
    >
      <Box
        className={`${titleSize ? `text-${titleSize}` : ""}`}
        style={{ fontWeight: titleWeight }}
      >
        {title}
      </Box>
      <Box className={"cursor-pointer text-black"} onClick={() => onClose()}>
        <IoClose />
      </Box>
    </HStack>
  );
};

export default memo(ModalHeader);
