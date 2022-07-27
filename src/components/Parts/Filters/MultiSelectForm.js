import { Button, Checkbox, FormControl, HStack, VStack } from "../../Design";

const MultiSelectForm = ({
  handleSubmit,
  register,
  reset,
  registKey,
  submitForm,
  dataReady,
  data,
}) => {
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <VStack
        width="calc(100% - 2rem)"
        height="calc(100% - 2rem)"
        padding="1rem"
      >
        <FormControl width="full" overflowY="auto" maxHeight="15rem">
          {dataReady &&
            data?.map(({ id, name }) => (
              <Checkbox
                key={id}
                value={id}
                {...register(registKey, { valueAsNumber: true })}
              >
                {name}
              </Checkbox>
            ))}
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

export default MultiSelectForm;
