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
        <PageBody className="w-full">
          {isLoading && (
            <HStack className="gap-8">
              <Skeleton /> <Skeleton />
            </HStack>
          )}
          {!isLoading && (
            <HStack className="gap-8">
              <Card className="w-full">
                <FormControl>
                  <InputLabel htmlFor="name">Nome</InputLabel>
                  <Input
                    name="name"
                    id="name"
                    {...register("name", { required: true })}
                  />
                </FormControl>
              </Card>
              <Card className="w-full">
                <VStack className="gap-4">
                  <HStack className="items-center gap-2 font-normal text-xl">
                    <FiSettings />
                    <Box className={"leading-none"}>Peças</Box>
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
