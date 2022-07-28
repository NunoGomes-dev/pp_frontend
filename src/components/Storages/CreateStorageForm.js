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
      <VStack className="p-8 pt-0 w-full gap-8">
        <FormControl className="w-full">
          <InputLabel htmlFor="name">Nome</InputLabel>
          <Input
            {...register("name", { required: "Nome da gaveta obrigatório" })}
            className="w-full"
          />
          <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
        </FormControl>
        <Button
          variant="solid"
          type="submit"
          className="self-end"
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
