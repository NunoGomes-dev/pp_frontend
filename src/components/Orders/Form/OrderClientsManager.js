import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { HiOutlineDocumentText, HiOutlinePhone } from "react-icons/hi";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  Grid,
  HStack,
  VStack,
} from "../../Design";
import { Skeleton } from "../../UI";

const OrderClientsManager = ({
  hasOrder,
  isLoadingOrder,
  openClientsModal,
  client,
  errors,
}) => {
  return (
    <Card className="p-8 h-min">
      <Skeleton
        className={"w-full h-full"}
        isLoading={hasOrder && isLoadingOrder}
      >
        <Grid className={"w-full gap-6 grid-cols"}>
          <Box className={"w-full text-xl font-medium"}>
            Informações do cliente
          </Box>
          {!client && (
            <FormControl>
              <Button
                variant={"search"}
                icon={<AiOutlineSearch fontSize={"20px"} />}
                className="w-full px-4 py-2 text-lg font-light"
                textAlign="start"
                onClick={() => openClientsModal()}
              >
                Pesquisar Cliente
              </Button>
              <FormErrorMessage>
                {errors?.searchClient?.message}
              </FormErrorMessage>
            </FormControl>
          )}
          {client && (
            <VStack className="text-primary text-lg font-light">
              <HStack className="gap-2 items-center">
                <FiUser />
                <Box className="text-terciary font-medium">{client.name}</Box>
              </HStack>
              <HStack className="gap-2 items-center">
                <AiOutlineMail />{" "}
                <Box className="text-terciary">{client.email}</Box>
              </HStack>
              <HStack className="gap-2 items-center">
                <HiOutlinePhone />{" "}
                <Box className="text-terciary">{client.contact}</Box>
              </HStack>
              <HStack className="gap-2 items-center">
                <HiOutlineDocumentText />{" "}
                <Box className="text-terciary">{client.vat}</Box>
              </HStack>
              <Button
                iconPlacement="end"
                variant="outline"
                icon={<FiUser strokeWidth={3} />}
                className="font-medium self-end border-0"
                onClick={() => openClientsModal()}
              >
                Trocar cliente
              </Button>
            </VStack>
          )}
        </Grid>
      </Skeleton>
    </Card>
  );
};

export default OrderClientsManager;
