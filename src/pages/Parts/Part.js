import {
  Button,
  HStack,
  PageContainer,
  PageHeader,
  PartsForm,
} from "../../components";
import { FiSave } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import usePostPart from "../../hooks/mutations/usePostPart";
import useStorages from "../../hooks/data/useStorages";
import clearObj from "../../utils/clearObj";

const Part = () => {
  const { id } = useParams();
  const { mutate, isLoading: loadingMutate } = usePostPart();
  const getStorages = useStorages();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <PageContainer>
      <form
        onSubmit={handleSubmit((v) => mutate(clearObj(v)))}
        style={{ width: "100%", height: "100%" }}
      >
        <PageHeader title="Nova peça">
          <HStack gap={4}>
            <Button variant="light">Cancelar</Button>
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
        <PartsForm
          register={register}
          errors={errors}
          getStorages={getStorages}
        />
      </form>
    </PageContainer>
  );
};

export default Part;
