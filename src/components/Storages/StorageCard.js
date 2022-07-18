import { Box, Button, HStack, IconButton, Stack, VStack } from "../Design";
import { VscTrash } from "react-icons/vsc";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "../UI/Modal";
import { useNavigate } from "react-router-dom";

const StorageCard = ({ storage, handleRemove }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = handleRemove;

  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            title="Eliminar gaveta"
            onClose={() => setIsOpen(false)}
          />
          <ModalBody width="full">
            <VStack padding="1rem" width="calc(100% - 2rem)" gap={6}>
              <Box>
                Tem a certeza que deseja eliminar a gaveta{" "}
                <b>{storage.name}?</b>
              </Box>
              <HStack width="full" justify="end" align="center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  variant="solid"
                  background="#FC8181"
                  border="1px solid red"
                  onClick={() => {
                    mutate({ id: storage.id });
                    setIsOpen(false);
                  }}
                >
                  Apagar
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
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
        cursor="pointer"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/storages/${storage.id}`);
        }}
      >
        <Box fontWeight="600" fontSize="2xl">
          {storage.name}
        </Box>
        <IconButton
          variant="unstyled"
          color="#E0E0E0"
          fontSize="1.5rem"
          position="absolute"
          top="1rem"
          right="1rem"
          icon={<VscTrash />}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        />
      </Stack>
    </>
  );
};

export default StorageCard;
