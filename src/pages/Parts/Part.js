import {
  Button,
  HStack,
  PageContainer,
  PageHeader,
  PartForm,
} from "../../components";
import { FiSave } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import usePostPart from "../../hooks/mutations/usePostPart";
import useStorages from "../../hooks/data/useStorages";
import clearObj from "../../utils/clearObj";
import useProviders from "../../hooks/data/useProviders";
import usePartId from "../../hooks/data/usePartId";
import usePutPart from "../../hooks/mutations/usePutPart";
import { RiAddBoxFill } from "react-icons/ri";

const Part = () => {
  const { id } = useParams();
  const hasPart = id !== "new" ? true : false;
  const { handleSubmit, reset, ...form } = useForm();

  const { mutate: mutateCreation, isLoading: loadingMutateCreation } =
    usePostPart();
  const { mutate: mutateEdition, isLoading: loadingMutateEdition } =
    usePutPart(reset);

  const getPart = usePartId(id, reset);
  const getStorages = useStorages();
  const getProviders = useProviders();

  return (
    <PageContainer>
      <form
        onSubmit={handleSubmit((v) =>
          hasPart ? mutateEdition(clearObj(v)) : mutateCreation(clearObj(v))
        )}
        className="w-full h-full"
      >
        <PageHeader
          title={hasPart ? getPart?.data?.name || "Editar Peça" : "Nova peça"}
        >
          <HStack className="gap-4">
            <Link to="/parts">
              <Button variant="light">Cancelar</Button>
            </Link>
            <Button
              variant="solid"
              icon={
                hasPart ? (
                  <FiSave
                    style={{ transform: "scale(1.25)", strokeWidth: 2 }}
                  />
                ) : (
                  <RiAddBoxFill style={{ transform: "scale(1.25)" }} />
                )
              }
              iconPlacement="end"
              type="submit"
              isLoading={loadingMutateCreation || loadingMutateEdition}
            >
              {hasPart ? "Guardar" : "Criar"}
            </Button>
          </HStack>
        </PageHeader>
        <PartForm
          hasPart={hasPart}
          form={form}
          getPart={getPart || null}
          getStorages={getStorages}
          getProviders={getProviders}
        />
      </form>
    </PageContainer>
  );
};

export default Part;
