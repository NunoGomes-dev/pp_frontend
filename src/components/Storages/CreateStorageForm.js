import {
  VStack,
  HStack,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "../Design";
import { CgAddR } from "react-icons/cg";

const CreateStorageForm = ({
  setIsOpen,
  handleSubmit,
  register,
  postMutation,
}) => {
  const { mutate, isLoading } = postMutation;
  return (
    <form onSubmit={handleSubmit(mutate)}>
      <VStack padding="1rem" width="calc(100% - 2rem)" gap={6}>
        <FormControl>
          <InputLabel htmlFor="name">Nome</InputLabel>
          <Input {...register("name", { required: true })} />
        </FormControl>
        <HStack width="full" justify="end" align="center">
          <Button
            variant="solid"
            type="submit"
            isLoading={isLoading}
            loadingText="A criar..."
            icon={<CgAddR />}
            iconPlacement="end"
          >
            Criar
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default CreateStorageForm;
