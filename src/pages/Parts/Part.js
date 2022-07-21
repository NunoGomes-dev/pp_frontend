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

const Part = () => {
  const { id } = useParams();
  const { mutate, isLoading: loadingMutate } = usePostPart();
  const getStorages = useStorages();
  const getProviders = useProviders();
  const {
    handleSubmit,
    register,
    setValue,
    watch,
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
            <Link to="/parts">
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
        <PartForm
          register={register}
          errors={errors}
          setValue={setValue}
          watch={watch}
          getStorages={getStorages}
          getProviders={getProviders}
        />
      </form>
    </PageContainer>
  );
};

export default Part;
