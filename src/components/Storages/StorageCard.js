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
          <ModalBody className="w-full">
            <VStack className="p-4 w-full gap-6">
              <Box>
                Tem a certeza que deseja eliminar a gaveta{" "}
                <b>{storage.name}?</b>
              </Box>
              <HStack className="w-full items-center justify-end">
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
                  className="bg-[#FC8181] border border-solid border-red-600"
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
        className={
          "w-[200px] h-[200px] border border-solid border-[#e0e0e0] bg-white text-title justify-center items-center relative rounded-lg cursor-pointer"
        }
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/storages/${storage.id}`);
        }}
      >
        <Box className={"font-semibold text-2xl"}>{storage.name}</Box>
        <IconButton
          className="top-4 text-xl right-4 absolute text-[#e0e0e0] px-0 py-0"
          variant="unstyled"
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
