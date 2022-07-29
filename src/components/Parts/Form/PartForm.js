import {
  Card,
  FormControl,
  FormErrorMessage,
  Grid,
  Input,
  InputLabel,
  VStack,
  Select,
} from "../../Design";
import { InputFile, PageBody, Skeleton } from "../../UI";

const floatRequired = {
  valueAsNumber: true,
  min: {
    value: 0,
    message: "Valor inválido! Mínimo: 0",
  },
};

const PartsForm = ({ hasPart, form, getPart, getStorages, getProviders }) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;
  const { isLoading: isLoadingPart } = getPart;
  const { data: storagesData, isSuccess: storagesReady } = getStorages;
  const { data: providersData, isSuccess: providersReady } = getProviders;

  return (
    <PageBody className={"w-full h-full"}>
      <Card className={"w-full p-8"}>
        <Grid className={"w-full gap-8 grid-cols-[2fr_1fr]"}>
          <Skeleton
            className={"w-full h-full"}
            isLoading={hasPart && isLoadingPart}
          >
            <VStack className={"w-full gap-8"}>
              <Grid //ref | name
                className={"w-full gap-8 grid-cols-2"}
              >
                <FormControl className="w-full">
                  <InputLabel htmlFor="ref">Referência</InputLabel>
                  <Input id="ref" className="w-full" {...register("ref")} />
                  <FormErrorMessage>{errors?.ref?.message}</FormErrorMessage>
                </FormControl>
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
              </Grid>
              <Grid // provider | brand
                className={"w-full gap-8 grid-cols-2"}
              >
                <FormControl className="w-full">
                  <InputLabel htmlFor="providerId">Fornecedor</InputLabel>
                  <Select
                    id="providerId"
                    className="w-full"
                    {...register("providerId")}
                    defaultValue={""}
                  >
                    <option value={""}>Selecionar fornecedor</option>
                    {providersReady &&
                      providersData?.providers?.map(({ id, name, email }) => (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      ))}
                  </Select>
                  <FormErrorMessage>
                    {errors?.providerId?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl className="w-full">
                  <InputLabel htmlFor="brand">Marca</InputLabel>
                  <Input id="brand" className="w-full" {...register("brand")} />
                </FormControl>
              </Grid>
              <Grid // storage
                className={"w-full gap-8 grid-cols-2"}
              >
                <FormControl className="w-full">
                  <InputLabel htmlFor="storageId">Gaveta</InputLabel>
                  <Select
                    id="storageId"
                    className="w-full"
                    {...register("storageId", { valueAsNumber: true })}
                    defaultValue={""}
                  >
                    <option value={""}>Selecionar gaveta</option>
                    {storagesReady &&
                      storagesData?.storages?.map(({ id, name }) => (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      ))}
                  </Select>
                  <FormErrorMessage>
                    {errors?.storageId?.message}
                  </FormErrorMessage>
                </FormControl>
              </Grid>
              <Grid //stock | min_stock
                className={"w-full gap-8 grid-cols-2"}
              >
                <FormControl className="w-full">
                  <InputLabel htmlFor="stock">Stock</InputLabel>
                  <Input
                    id="stock"
                    className="w-full"
                    type="number"
                    {...register("stock", { ...floatRequired })}
                  />
                  <FormErrorMessage>{errors?.stock?.message}</FormErrorMessage>
                </FormControl>
                <FormControl className="w-full">
                  <InputLabel htmlFor="minStock">Stock mínimo</InputLabel>
                  <Input
                    id="minStock"
                    className="w-full"
                    type="number"
                    {...register("minStock", { ...floatRequired })}
                  />
                  <FormErrorMessage>
                    {errors?.minStock?.message}
                  </FormErrorMessage>
                </FormControl>
              </Grid>
              <Grid //cost | resale_price | price
                className={"w-full gap-8 grid-cols-2"}
              >
                <FormControl className="w-full">
                  <InputLabel htmlFor="cost">Custo</InputLabel>
                  <Input
                    id="cost"
                    className="w-full"
                    type="number"
                    step="0.01"
                    {...register("cost", { ...floatRequired })}
                  />
                  <FormErrorMessage>{errors?.cost?.message}</FormErrorMessage>
                </FormControl>
                <FormControl className="w-full">
                  <InputLabel htmlFor="resalePrice">Revenda</InputLabel>
                  <Input
                    id="resalePrice"
                    className="w-full"
                    type="number"
                    step="0.01"
                    {...register("resalePrice", { ...floatRequired })}
                  />
                  <FormErrorMessage>
                    {errors?.resalePrice?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl className="w-full">
                  <InputLabel htmlFor="price">Preço final</InputLabel>
                  <Input
                    id="price"
                    className="w-full"
                    type="number"
                    step="0.01"
                    {...register("price", { ...floatRequired })}
                  />
                  <FormErrorMessage>{errors?.price?.message}</FormErrorMessage>
                </FormControl>
              </Grid>
            </VStack>
          </Skeleton>
          <Skeleton
            className={"w-full h-full"}
            isLoading={hasPart && isLoadingPart}
          >
            <InputFile
              value={watch("image")}
              callback={(file) => {
                setValue("image", file);
              }}
            />
          </Skeleton>
        </Grid>
      </Card>
    </PageBody>
  );
};

export default PartsForm;
