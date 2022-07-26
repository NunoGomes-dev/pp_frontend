import {
  VStack,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormErrorMessage,
} from "../Design";
import { CgAddR } from "react-icons/cg";
import { useForm } from "react-hook-form";

const CreateStorageForm = ({ setIsOpen, postMutation }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { mutate, isLoading } = postMutation;

  return (
    <form onSubmit={handleSubmit(mutate)}>
      <VStack padding="2rem" paddingTop="0" width="calc(100% - 4rem)" gap={8}>
        <FormControl width="calc(100% - 2rem)">
          <InputLabel htmlFor="name">Nome</InputLabel>
          <Input
            {...register("name", { required: "Nome da gaveta obrigatório" })}
            width="full"
          />
          <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
        </FormControl>
        <Button
          variant="solid"
          type="submit"
          alignSelf="end"
          isLoading={isLoading}
          loadingText="A criar..."
          icon={<CgAddR />}
          iconPlacement="end"
        >
          Criar
        </Button>
      </VStack>
    </form>
  );
};

export default CreateStorageForm;
