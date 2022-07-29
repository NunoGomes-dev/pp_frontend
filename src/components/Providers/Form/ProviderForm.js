import {
  Card,
  FormControl,
  FormErrorMessage,
  Grid,
  HStack,
  Input,
  InputLabel,
  VStack,
} from "../../Design";
import { InputFile, PageBody, Skeleton } from "../../UI";

const ProviderForm = ({
  hasProvider,
  getProvider,
  register,
  errors,
  setValue,
  watch,
}) => {
  const { isLoading: isLoadingProvider } = getProvider;
  return (
    <PageBody className="w-full">
      <Card className="w-full p-8">
        <Grid className="w-full grid-cols-[2fr_1fr] gap-8">
          <Skeleton
            isLoading={hasProvider ? isLoadingProvider : false}
            className="w-full h-[400px]"
          >
            <VStack className="w-full gap-8">
              <FormControl className="w-full">
                <InputLabel htmlFor="name" required>
                  Nome
                </InputLabel>
                <Input
                  id="name"
                  className="w-full"
                  {...register("name", { required: "Nome obrigatório" })}
                />
                <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
              </FormControl>
              <FormControl className="w-full">
                <InputLabel htmlFor="email" required>
                  Email
                </InputLabel>
                <Input
                  id="email"
                  className="w-full"
                  {...register("email", { required: "Email obrigatório" })}
                />
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
              </FormControl>
              <HStack className="w-full gap-4">
                <FormControl className="w-full">
                  <InputLabel htmlFor="contact">Contacto</InputLabel>
                  <Input
                    id="contact"
                    className="w-full"
                    {...register("contact")}
                  />
                  <FormErrorMessage>
                    {errors?.contact?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl className="w-full">
                  <InputLabel htmlFor="vat">NIF</InputLabel>
                  <Input id="vat" className="w-full" {...register("vat")} />
                  <FormErrorMessage>{errors?.vat?.message}</FormErrorMessage>
                </FormControl>
              </HStack>
            </VStack>
          </Skeleton>
          <Skeleton
            isLoading={hasProvider ? isLoadingProvider : false}
            className="w-full h-[400px]"
          >
            <InputFile
              value={watch("image")}
              callback={(file) => {
                setValue("image", file);
              }}
              containerProps={"h-[400px]"}
            />
          </Skeleton>
        </Grid>
      </Card>
    </PageBody>
  );
};

export default ProviderForm;
