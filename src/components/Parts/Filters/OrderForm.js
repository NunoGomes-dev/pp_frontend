import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  InputLabel,
  Select,
  VStack,
} from "../../Design";

const OrderForm = ({
  handleSubmit,
  register,
  reset,
  errors,
  submitForm,
  options,
}) => {
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <VStack
        width="calc(100% - 2rem)"
        height="calc(100% - 2rem)"
        padding="1rem"
      >
        <FormControl width="full">
          <InputLabel htmlFor="orderBy" color="secondary" fontSize="sm">
            Condição:
          </InputLabel>
          <Select
            id="orderBy"
            width="full"
            {...register("orderBy")}
            defaultValue={"createdAt"}
          >
            {options?.map(({ name, key }) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors?.orderBy?.message}</FormErrorMessage>
        </FormControl>
        <FormControl width="full">
          <Select
            id="order"
            width="full"
            {...register("order")}
            defaultValue={"ASC"}
          >
            <option value={"ASC"}>Ascendente</option>
            <option value={"DESC"}>Descentente</option>
          </Select>
          <FormErrorMessage>{errors?.order?.message}</FormErrorMessage>
        </FormControl>
        <HStack width="full" justify="space-between">
          <Button
            variant="light"
            padding="0.5rem"
            onClick={() => reset()}
            width="full"
          >
            Cancelar
          </Button>
          <Button type="submit" padding="0.5rem" width="full">
            Aplicar
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default OrderForm;
