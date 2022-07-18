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

const Part = () => {
  const { id } = useParams();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <PageContainer>
      <form onSubmit={handleSubmit} style={{ width: "100%", height: "100%" }}>
        <PageHeader title="Nova peça">
          <HStack gap={4}>
            <Button variant="light">Cancelar</Button>
            <Button
              variant="solid"
              icon={
                <FiSave style={{ transform: "scale(1.25)", strokeWidth: 2 }} />
              }
              iconPlacement="end"
            >
              Guardar
            </Button>
          </HStack>
        </PageHeader>
        <PartsForm register={register} errors={errors} />
      </form>
    </PageContainer>
  );
};

export default Part;
