import { AiOutlineSearch } from "react-icons/ai";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  Grid,
  Select,
  VStack,
} from "../../Design";
import OrderItemCard from "../../OrderItem/OrderItemCard";
import { Skeleton } from "../../UI";

const OrderItemsManager = ({
  hasOrder,
  isLoadingOrder,
  order,
  register,
  errors,
  openPartsModal,
  items,
  setItems,
}) => {
  const handleQuantityChange = ({ id, quantity }) => {
    const tempItems = items.map((i) => {
      if (i.partId === id) {
        return { ...i, quantity: quantity };
      }
      return { ...i };
    });
    setItems(tempItems);
  };

  const handleRemove = (id) => {
    const tempItems = items.filter((i) => i.partId !== id);
    setItems(tempItems);
  };

  return (
    <Card className={"p-8 h-min"}>
      <Skeleton
        className={"w-full h-full"}
        isLoading={hasOrder && isLoadingOrder}
      >
        <Grid className={"w-full gap-6 grid-cols"}>
          <Grid className="w-full grid-cols-[65%_30%] gap-[5%] items-center">
            <Box className={"w-full text-xl font-medium"}>
              Encomenda {hasOrder ? `#${order?.id}` : ""}
            </Box>
            {hasOrder ? (
              <Card className="bg-gray-50 text-md">{order?.type || ""}</Card>
            ) : (
              <FormControl className={"w-full"}>
                <Select
                  id="type"
                  className="w-full"
                  {...register("type", {
                    required: "Tipo de encomenda obrigatório",
                  })}
                  defaultValue={""}
                >
                  <option value={""}>Tipo de encomenda</option>
                  <option value={"final"}>Final</option>
                  <option value={"revenda"}>Revenda</option>
                </Select>
                <FormErrorMessage>{errors?.type?.message}</FormErrorMessage>
              </FormControl>
            )}
          </Grid>
          {!hasOrder && (
            <FormControl>
              <Button
                variant={"search"}
                icon={<AiOutlineSearch fontSize={"20px"} />}
                className="w-full px-4 py-2 text-lg font-light"
                textAlign="start"
                onClick={() => openPartsModal()}
              >
                Pesquisar Peças
              </Button>
              <FormErrorMessage>{errors?.searchPart?.message}</FormErrorMessage>
            </FormControl>
          )}
          <VStack className={"w-full"}>
            {items?.map((i) => (
              <OrderItemCard
                key={i.id}
                item={i}
                handleQuantityChange={handleQuantityChange}
                handleRemove={handleRemove}
                editable={!hasOrder}
              />
            ))}
            <Box className="self-end text-xl">
              <span className="text-base text-gray-500">Total: </span>
              {items.reduce((p, c) => p + c.unitPrice * c.quantity, 0)}€
            </Box>
          </VStack>
        </Grid>
      </Skeleton>
    </Card>
  );
};

export default OrderItemsManager;
