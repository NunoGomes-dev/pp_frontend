import { useForm } from "react-hook-form";
import { FiSave, FiSettings } from "react-icons/fi";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  FormControl,
  HStack,
  Input,
  InputLabel,
  PageBody,
  PageContainer,
  PageHeader,
  Skeleton,
  VStack,
} from "../../components";
import useStorageId from "../../hooks/data/useStorageId";
import usePutStorage from "../../hooks/mutations/usePutStorage";

const Storage = () => {
  const { id } = useParams();
  const { handleSubmit, register, reset } = useForm();
  const { data, isLoading } = useStorageId(id, reset);
  const { mutate, isLoading: isLoadingMutate } = usePutStorage(reset);

  return (
    <form onSubmit={handleSubmit(mutate)}>
      <PageContainer>
        <PageHeader title={"Editar gaveta"}>
          <Button icon={<FiSave />} isLoading={isLoadingMutate} type="submit">
            {"Gravar"}
          </Button>
        </PageHeader>
        <PageBody width="full">
          {isLoading && (
            <HStack gap={8}>
              <Skeleton /> <Skeleton />
            </HStack>
          )}
          {!isLoading && (
            <HStack gap={8}>
              <Card width="full">
                <FormControl>
                  <InputLabel htmlFor="name">Nome</InputLabel>
                  <Input
                    name="name"
                    id="name"
                    {...register("name", { required: true })}
                  />
                </FormControl>
              </Card>
              <Card width="full">
                <VStack gap={4}>
                  <HStack align="center" gap={2} fontWeight="400" fontSize="xl">
                    <FiSettings />
                    <Box lineHeight="0">Peças</Box>
                  </HStack>
                  {data?.parts?.length > 0 ? (
                    <VStack>
                      {data.parts.map((p) => (
                        <div key={p.id}>{p.name}</div>
                      ))}
                    </VStack>
                  ) : (
                    <Box>Sem peças associadas!</Box>
                  )}
                </VStack>
              </Card>
            </HStack>
          )}
        </PageBody>
      </PageContainer>
    </form>
  );
};

export default Storage;
