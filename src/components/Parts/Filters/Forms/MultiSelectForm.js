import { Button, Checkbox, FormControl, HStack, VStack } from "../../../Design";

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
      <VStack className="w-full h-full p-4 gap-2">
        <FormControl className={"w-full overflow-y-auto max-h-[15rem]"}>
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
        <HStack className={"w-full justify-between gap-2"}>
          <Button
            variant="light"
            padding="0.5rem"
            onClick={() => reset()}
            width="full"
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

export default MultiSelectForm;
