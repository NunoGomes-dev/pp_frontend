import { FiUpload } from "react-icons/fi";
import {
  Box,
  Card,
  FormControl,
  FormErrorMessage,
  Grid,
  Input,
  InputLabel,
  VStack,
  Select,
  HStack,
} from "../../Design";
import { PageBody } from "../../UI";

const PartsForm = ({ register, errors }) => {
  return (
    <PageBody width="full">
      <Card width="calc(100% - 4rem)" padding="2rem">
        <Grid gridTemplateColumns="2fr 1fr" gap={8} width="full">
          <VStack width="full" gap={8}>
            <Grid gridTemplateColumns="1fr 1fr" gap={8} width="full">
              <FormControl width="full">
                <InputLabel htmlFor="sku">Referência</InputLabel>
                <Input
                  id="sku"
                  width="calc(100% - 2rem)"
                  {...register("sku")}
                />
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
            <Grid gridTemplateColumns="1fr 1fr" gap={8} width="full">
              <FormControl width="full">
                <InputLabel htmlFor="provider">Fornecedor</InputLabel>
                <Select
                  id="provider"
                  width="full"
                  {...register("provider")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecionar fornecedor
                  </option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                </Select>
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
            <Grid gridTemplateColumns="1fr 1fr" gap={8} width="full">
              <FormControl width="full">
                <InputLabel htmlFor="storage">Gaveta</InputLabel>
                <Select
                  id="storage"
                  width="full"
                  {...register("storage")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecionar gaveta
                  </option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid gridTemplateColumns="1fr 1fr" gap={8} width="full">
              <FormControl width="full">
                <InputLabel htmlFor="stock">Stock</InputLabel>
                <Input
                  id="stock"
                  width="calc(100% - 2rem)"
                  {...register("stock")}
                />
              </FormControl>
              <FormControl width="full">
                <InputLabel htmlFor="min_stock">Stock mínimo</InputLabel>
                <Input
                  id="min_stock"
                  width="calc(100% - 2rem)"
                  {...register("min_stock")}
                />
              </FormControl>
            </Grid>
            <Grid gridTemplateColumns="1fr 1fr 1fr" gap={8} width="full">
              <FormControl width="full">
                <InputLabel htmlFor="resale_price">Revenda</InputLabel>
                <Input
                  id="resale_price"
                  width="calc(100% - 2rem)"
                  {...register("resale_price")}
                />
              </FormControl>
              <FormControl width="full">
                <InputLabel htmlFor="cost">Custo</InputLabel>
                <Input
                  id="cost"
                  width="calc(100% - 2rem)"
                  {...register("cost")}
                />
              </FormControl>
              <FormControl width="full">
                <InputLabel htmlFor="price">Preço final</InputLabel>
                <Input
                  id="price"
                  width="calc(100% - 2rem)"
                  {...register("price")}
                />
              </FormControl>
            </Grid>
          </VStack>
          <VStack
            justify="center"
            align="center"
            fontSize="lg"
            border="2px dashed #E0E0E0"
            rounded="md"
          >
            <HStack fontWeight="500" color="terciary">
              <span>Adicionar imagem</span>
              <FiUpload />
            </HStack>
            <Box fontWeight="300" fontSize="sm" color="secondary">
              ou arraste a imagem para carregar
            </Box>
          </VStack>
        </Grid>
      </Card>
    </PageBody>
  );
};

export default PartsForm;
