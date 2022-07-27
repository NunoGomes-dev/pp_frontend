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
    <PageBody width="full" height="full">
      <Skeleton width="full" height="full" isLoading={hasPart && isLoadingPart}>
        <Card width="calc(100% - 4rem)" padding="2rem">
          <Grid gridTemplateColumns="2fr 1fr" gap={8} width="full">
            <VStack width="full" gap={8}>
              <Grid //ref | name
                gridTemplateColumns="1fr 1fr"
                gap={8}
                width="full"
              >
                <FormControl width="full">
                  <InputLabel htmlFor="ref">Referência</InputLabel>
                  <Input
                    id="ref"
                    width="calc(100% - 2rem)"
                    {...register("ref")}
                  />
                  <FormErrorMessage>{errors?.ref?.message}</FormErrorMessage>
                </FormControl>
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
              </Grid>
              <Grid // provider | brand
                gridTemplateColumns="1fr 1fr"
                gap={8}
                width="full"
              >
                <FormControl width="full">
                  <InputLabel htmlFor="providerId">Fornecedor</InputLabel>
                  <Select
                    id="providerId"
                    width="full"
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
                <FormControl width="full">
                  <InputLabel htmlFor="brand">Marca</InputLabel>
                  <Input
                    id="brand"
                    width="calc(100% - 2rem)"
                    {...register("brand")}
                  />
                </FormControl>
              </Grid>
              <Grid // storage
                gridTemplateColumns="1fr 1fr"
                gap={8}
                width="full"
              >
                <FormControl width="full">
                  <InputLabel htmlFor="storageId">Gaveta</InputLabel>
                  <Select
                    id="storageId"
                    width="full"
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
                gridTemplateColumns="1fr 1fr"
                gap={8}
                width="full"
              >
                <FormControl width="full">
                  <InputLabel htmlFor="stock">Stock</InputLabel>
                  <Input
                    id="stock"
                    width="calc(100% - 2rem)"
                    type="number"
                    {...register("stock", { ...floatRequired })}
                  />
                  <FormErrorMessage>{errors?.stock?.message}</FormErrorMessage>
                </FormControl>
                <FormControl width="full">
                  <InputLabel htmlFor="minStock">Stock mínimo</InputLabel>
                  <Input
                    id="minStock"
                    width="calc(100% - 2rem)"
                    type="number"
                    {...register("minStock", { ...floatRequired })}
                  />
                  <FormErrorMessage>
                    {errors?.minStock?.message}
                  </FormErrorMessage>
                </FormControl>
              </Grid>
              <Grid //cost | resale_price | price
                gridTemplateColumns="1fr 1fr 1fr"
                gap={8}
                width="full"
              >
                <FormControl width="full">
                  <InputLabel htmlFor="cost">Custo</InputLabel>
                  <Input
                    id="cost"
                    width="calc(100% - 2rem)"
                    type="number"
                    step="0.01"
                    {...register("cost", { ...floatRequired })}
                  />
                  <FormErrorMessage>{errors?.cost?.message}</FormErrorMessage>
                </FormControl>
                <FormControl width="full">
                  <InputLabel htmlFor="resalePrice">Revenda</InputLabel>
                  <Input
                    id="resalePrice"
                    width="calc(100% - 2rem)"
                    type="number"
                    step="0.01"
                    {...register("resalePrice", { ...floatRequired })}
                  />
                  <FormErrorMessage>
                    {errors?.resalePrice?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl width="full">
                  <InputLabel htmlFor="price">Preço final</InputLabel>
                  <Input
                    id="price"
                    width="calc(100% - 2rem)"
                    type="number"
                    step="0.01"
                    {...register("price", { ...floatRequired })}
                  />
                  <FormErrorMessage>{errors?.price?.message}</FormErrorMessage>
                </FormControl>
              </Grid>
            </VStack>
            <InputFile
              value={watch("image")}
              callback={(file) => {
                setValue("image", file);
              }}
            />
          </Grid>
        </Card>
      </Skeleton>
    </PageBody>
  );
};

export default PartsForm;
