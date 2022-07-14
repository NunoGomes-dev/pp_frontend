import { Box, Stack } from "../Design";
import { VscTrash } from "react-icons/vsc";

const StorageCard = ({ storage, handleRemove }) => {
  return (
    <Stack
      width="200px"
      height="200px"
      border="1px solid #E0E0E0"
      background="#FFFFFF"
      color="#04080F"
      justify="center"
      align="center"
      position="relative"
      borderRadius="8px"
    >
      <Box fontWeight="600" fontSize="2xl">
        {storage.name}
      </Box>
      <Box
        color="#E0E0E0"
        fontSize="1.5rem"
        position="absolute"
        top="1rem"
        right="1rem"
        cursor="pointer"
        onClick={() => {
          handleRemove({ id: storage.id });
        }}
      >
        <VscTrash />
      </Box>
    </Stack>
  );
};

export default StorageCard;
