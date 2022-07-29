import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  InputLabel,
  Select,
  VStack,
} from "../../../Design";

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
      <VStack className={"w-full h-full p-4 gap-2"}>
        <FormControl className={"w-full"}>
          <InputLabel htmlFor="orderBy" className="text-secondary text-sm">
            Condição:
          </InputLabel>
          <Select
            className="w-full"
            id="orderBy"
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
        <FormControl className="w-full">
          <Select
            id="order"
            className="w-full"
            {...register("order")}
            defaultValue={"ASC"}
          >
            <option value={"ASC"}>Ascendente</option>
            <option value={"DESC"}>Descentente</option>
          </Select>
          <FormErrorMessage>{errors?.order?.message}</FormErrorMessage>
        </FormControl>
        <HStack className="w-full justify-between gap-2">
          <Button
            variant="light"
            onClick={() => reset()}
            className="w-full p-2"
          >
            Cancelar
          </Button>
          <Button type="submit" className="w-full p-2">
            Aplicar
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default OrderForm;
