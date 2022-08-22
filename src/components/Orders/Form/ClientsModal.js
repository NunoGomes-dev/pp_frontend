import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Box,
  Button,
  Card,
  FormControl,
  HStack,
  Input,
  InputLabel,
  VStack,
} from "../../Design";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
} from "../../UI";

const ClientsModal = ({
  isOpenClientsModal,
  closeClientsModal,
  register,
  errors,
  clientsReady,
  clientsData,
  client,
  setClient,
  setValue,
}) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (client) setSelected(client);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confirmClient = () => {
    setClient({ ...selected });
    setValue("clientId", selected.id);
    closeClientsModal();
    setValue("searchClient", "");
  };

  const cancelClient = () => {
    setSelected(null);
    setClient(null);
    setValue("clientId", "");
    closeClientsModal();
    setValue("searchClient", "");
  };

  return (
    <Modal isOpen={isOpenClientsModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          title="Escolher Cliente"
          titleSize="xl"
          className={"p-4"}
          onClose={closeClientsModal}
        />
        <ModalBody className="w-full p-4 flex flex-col gap-4">
          <FormControl className="w-full">
            <HStack className="w-full justify-center items-center bg-white-100 text-gray-400 border border-gray-400 rounded-md px-4">
              <InputLabel htmlFor="searchClient" className="text-gray-400">
                <AiOutlineSearch fontSize={"20px"} />
              </InputLabel>
              <Input
                id="searchClient"
                className="w-full border-0 bg-transparent"
                placeholder="Pesquisar Cliente"
                {...register("searchClient")}
              />
            </HStack>
          </FormControl>
          <Skeleton isLoading={!clientsReady}>
            <VStack className="gap-2 w-full overflow-auto h-[300px]">
              {clientsReady &&
                clientsData?.clients?.map((c) => {
                  return (
                    <Card
                      key={c.id}
                      className={`p-4 w-full hover:bg-gray-200 cursor-pointer ${
                        selected?.id === c.id
                          ? "bg-gray-200 border border-solid border-primary"
                          : ""
                      }`}
                      onClick={() => {
                        selected?.id === c.id
                          ? setSelected(null)
                          : setSelected(c);
                      }}
                    >
                      <HStack className="items-center justify-between">
                        <Box>{c.name}</Box>
                        <Box className="font-light">{c.email}</Box>
                      </HStack>
                    </Card>
                  );
                })}
            </VStack>
          </Skeleton>
          <HStack className={"self-end"}>
            <Button
              variant="solid"
              disabled={!selected}
              onClick={() => {
                confirmClient();
              }}
            >
              Confirmar
            </Button>
            <Button
              variant="outline2"
              onClick={() => {
                cancelClient();
              }}
            >
              Cancelar
            </Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ClientsModal;
