import {
  Card,
  FormControl,
  FormErrorMessage,
  Grid,
  Input,
  InputLabel,
  VStack,
} from "../../Design";
import { InputFile, PageBody } from "../../UI";

const ProviderForm = ({ register, errors, setValue, watch }) => {
  return (
    <PageBody width="full">
      <Card width="calc(100% - 4rem)" padding="2rem">
        <Grid gridTemplateColumns="2fr 1fr" gap={8} width="full">
          <VStack width="full" gap={8}>
            <FormControl width="full">
              <InputLabel htmlFor="name" required>
                Nome
              </InputLabel>
              <Input
                id="name"
                width="calc(100% - 2rem)"
                {...register("name", { required: "Nome obrigatório" })}
              />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl width="full">
              <InputLabel htmlFor="email" required>
                Email
              </InputLabel>
              <Input
                id="email"
                width="calc(100% - 2rem)"
                {...register("email", { required: "Email obrigatório" })}
              />
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
          </VStack>
          <InputFile
            value={watch("image")}
            callback={(file) => {
              setValue("image", file);
            }}
            containerProps={{ height: "400px" }}
          />
        </Grid>
      </Card>
    </PageBody>
  );
};

export default ProviderForm;
