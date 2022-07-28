import { useForm } from "react-hook-form";
import { FiSave } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  Button,
  HStack,
  PageContainer,
  PageHeader,
  ProviderForm,
} from "../../components";
import usePostProvider from "../../hooks/mutations/usePostProvider";
import clearObj from "../../utils/clearObj";

const Provider = () => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const { mutate, isLoading: loadingMutate } = usePostProvider();

  return (
    <PageContainer>
      <form
        onSubmit={handleSubmit((v) => mutate(clearObj(v)))}
        className="w-full h-full"
      >
        <PageHeader title="Novo fornecedor">
          <HStack className={"gap-4"}>
            <Link to="/providers">
              <Button variant="light">Cancelar</Button>
            </Link>
            <Button
              variant="solid"
              icon={
                <FiSave style={{ transform: "scale(1.25)", strokeWidth: 2 }} />
              }
              iconPlacement="end"
              type="submit"
              isLoading={loadingMutate}
            >
              Guardar
            </Button>
          </HStack>
        </PageHeader>
        <ProviderForm
          register={register}
          errors={errors}
          setValue={setValue}
          watch={watch}
        />
      </form>
    </PageContainer>
  );
};

export default Provider;
