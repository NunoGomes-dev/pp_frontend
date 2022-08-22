import { Box, Button, Card, HStack, Image, VStack } from "../Design";
import { QuantityPicker } from "../UI";

const OrderItemCard = ({
  className,
  item,
  handleQuantityChange,
  handleRemove,
}) => {
  return (
    <Card className={`w-full ${className} px-8 text-lg`}>
      <HStack className={"items-center justify-between"}>
        <HStack className="gap-12 items-center">
          {item?.image ? (
            <Image
              src={item.image}
              alt={item.id}
              className="rounded-md h-[64px] w-[64px]"
            />
          ) : (
            <Box className="rounded-md h-[64px] w-[64px] bg-primary" />
          )}

          <Box className="">{item?.name}</Box>
        </HStack>
        <VStack className="gap-2 justify-center items-center">
          <QuantityPicker
            value={item.quantity}
            handleChange={(quantity) =>
              handleQuantityChange({ id: item.id, quantity: quantity })
            }
            min={0}
            max={item.stock}
          />
          <Button
            variant={"unstyled"}
            className="text-gray-400 text-sm"
            onClick={() => handleRemove(item.id)}
          >
            Remover
          </Button>
        </VStack>
        <Box>60€</Box>
      </HStack>
    </Card>
  );
};

export default OrderItemCard;
