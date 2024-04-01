import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormErrorMessage,
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

const OrderItemsModal = ({
  isOpenPartsModal,
  closePartsModal,
  register,
  errors,
  partsReady,
  partsData,
  items,
  setItems,
  setValue,
  watch,
  orderType,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (items) setSelectedItems([...items]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confirmItems = () => {
    setItems([...selectedItems]);
    closePartsModal();
    setValue("searchPart", "");
  };

  const cancelItems = () => {
    setSelectedItems([]);
    setItems([]);
    closePartsModal();
    setValue("searchPart", "");
  };

  const selectItem = (item) => {
    if (selectedItems.find((i) => i.partId === item.id)) {
      const tempItems = selectedItems.filter((i) => i.partId !== item.id);
      setSelectedItems(tempItems);
    } else {
      setSelectedItems([
        ...selectedItems,
        {
          quantity: 1,
          unitPrice: orderType === "revenda" ? item.resalePrice : item.price,
          partId: item.id,
          ...item,
        },
      ]);
    }
  };

  return (
    <Modal isOpen={isOpenPartsModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          title="Escolher Peças"
          titleSize="xl"
          className={"p-4"}
          onClose={closePartsModal}
        />
        <ModalBody className="w-full p-4 flex flex-col gap-4">
          <FormControl className="w-full">
            <HStack className="w-full justify-center items-center bg-white-100 text-gray-400 border border-gray-400 rounded-md px-4">
              <InputLabel htmlFor="searchPart" className="text-gray-400">
                <AiOutlineSearch fontSize={"20px"} />
              </InputLabel>
              <Input
                id="searchPart"
                className="w-full border-0 bg-transparent"
                placeholder="Pesquisar Peças"
                {...register("searchPart")}
              />
              {watch("searchPart")?.length > 0 && (
                <Button
                  variant={"unstyled"}
                  className="p-0 text-gray-300 text-2xl"
                  onClick={() => setValue("searchPart", "")}
                >
                  <IoIosClose />
                </Button>
              )}
            </HStack>
            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
          </FormControl>
          <Skeleton isLoading={!partsReady}>
            <VStack className="gap-2 w-full overflow-auto h-[300px]">
              {partsReady &&
                partsData?.parts?.map((p) => {
                  const color =
                    p.minStock > 0
                      ? p.stock > p.minStock
                        ? "bg-green-500"
                        : p.stock === p.minStock
                        ? "bg-orange-300"
                        : "bg-red-500"
                      : p.stock > 0
                      ? "bg-green-500"
                      : "bg-red-500";

                  return (
                    <Card
                      key={p.id}
                      className={`p-2 w-full hover:bg-gray-200 cursor-pointer ${
                        selectedItems?.find((i) => i.partId === p.id)
                          ? "bg-gray-200 border border-solid border-primary"
                          : ""
                      }`}
                      onClick={() => {
                        selectItem(p);
                      }}
                    >
                      <HStack className="items-center justify-between">
                        <HStack className="gap-2">
                          <Box className={`rounded-full ${color} p-2 w-min`} />
                          <Box>{p.name}</Box>
                        </HStack>
                        <Box>
                          {orderType === "revenda" ? p?.price : p?.resalePrice}€
                        </Box>
                      </HStack>
                    </Card>
                  );
                })}
            </VStack>
          </Skeleton>
          <HStack className={"self-end"}>
            <Button
              variant="solid"
              disabled={!selectedItems || selectedItems.length === 0}
              onClick={() => {
                confirmItems();
              }}
            >
              Confirmar
            </Button>
            <Button
              variant="outline2"
              onClick={() => {
                cancelItems();
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

export default OrderItemsModal;
