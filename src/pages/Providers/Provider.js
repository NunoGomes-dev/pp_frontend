import { useForm } from "react-hook-form";
import { FiSave } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  HStack,
  PageContainer,
  PageHeader,
  ProviderForm,
} from "../../components";
import useProviderId from "../../hooks/data/useProviderId";
import usePostProvider from "../../hooks/mutations/usePostProvider";
import usePutProvider from "../../hooks/mutations/usePutProvider";
import clearObj from "../../utils/clearObj";

const Provider = () => {
  const { id } = useParams();
  const hasProvider = id && id !== "new" ? true : false;
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate: mutateCreation, isLoading: loadingCreation } =
    usePostProvider();
  const { mutate: mutateEdition, isLoading: loadingEdition } =
    usePutProvider(reset);

  const getProvider = useProviderId(id, reset);

  return (
    <PageContainer>
      <form
        onSubmit={handleSubmit((v) =>
          hasProvider ? mutateEdition(clearObj(v)) : mutateCreation(clearObj(v))
        )}
        className="w-full h-full"
      >
        <PageHeader
          title={
            hasProvider
              ? getProvider?.data?.name || "Editar Fornecedor"
              : "Novo Fornecedor"
          }
        >
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
              isLoading={loadingCreation || loadingEdition}
            >
              Guardar
            </Button>
          </HStack>
        </PageHeader>
        <ProviderForm
          hasProvider={hasProvider}
          register={register}
          errors={errors}
          setValue={setValue}
          watch={watch}
          getProvider={getProvider}
        />
      </form>
    </PageContainer>
  );
};

export default Provider;
