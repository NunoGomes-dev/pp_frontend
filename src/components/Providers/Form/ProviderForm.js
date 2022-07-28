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
    <PageBody className="w-full">
      <Card className="w-full p-8">
        <Grid className="w-full grid-cols-[2fr_1fr] gap-8">
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
          </VStack>
          <InputFile
            value={watch("image")}
            callback={(file) => {
              setValue("image", file);
            }}
            containerProps={"h-[400px]"}
          />
        </Grid>
      </Card>
    </PageBody>
  );
};

export default ProviderForm;
