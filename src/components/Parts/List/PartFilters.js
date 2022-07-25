import { useForm } from "react-hook-form";
import {
  Accordion,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  HStack,
  InputLabel,
  Select,
  VStack,
} from "../../Design";

const PartFilters = ({
  filters,
  setFilters,
  orderByOptions,
  getProviders,
  getStorages,
}) => {
  const { data: storages, isSuccess: storagesReady } = getStorages;
  const { data: providers, isSuccess: providersReady } = getProviders;

  const {
    handleSubmit: handleOrder,
    register: registOrder,
    reset: resetOrder,
    formState: { errors: errorsOrder },
  } = useForm();
  const {
    handleSubmit: handleStorage,
    register: registStorage,
    reset: resetStorage,
  } = useForm();
  const {
    handleSubmit: handleProvider,
    register: registProvider,
    reset: resetProvider,
  } = useForm();

  const submitOrder = ({ orderBy, order }) => {
    const newFilter = {
      name: `Ordenação: ${
        orderByOptions.find((o) => o.key === orderBy).name
      }, ${order === "ASC" ? "Ascendente" : "Descendente"}`,
      query: `order=${order}&orderBy=${orderBy}`,
      type: "order",
      clear: resetOrder,
    };
    let tempFilters = filters;
    if (tempFilters.find((f) => f.type === "order")) {
      setFilters([...tempFilters.filter((f) => f.type !== "order"), newFilter]);
    } else {
      setFilters([...filters, newFilter]);
    }
  };
  const submitProvider = ({ providers: values }) => {
    if (!values) return;
    const names = values.map(
      // eslint-disable-next-line eqeqeq
      (v) => providers?.providers.find((p) => p.id == v).name
    );
    const newFilter = {
      name: `Fornecedores: ${names}`,
      query: `provider_id=[${values}]`,
      type: "provider",
      clear: resetProvider,
    };
    let tempFilters = filters;
    if (tempFilters.find((f) => f.type === "provider")) {
      setFilters([
        ...tempFilters.filter((f) => f.type !== "provider"),
        newFilter,
      ]);
    } else {
      setFilters([...filters, newFilter]);
    }
  };
  const submitStorage = ({ storages: values }) => {
    if (!values) return;
    const names = values.map(
      // eslint-disable-next-line eqeqeq
      (v) => storages?.storages.find((p) => p.id == v).name
    );
    const newFilter = {
      name: `Gavetas: ${names}`,
      query: `storage_id=[${values}]`,
      type: "storage",
      clear: () => resetStorage,
    };
    let tempFilters = filters;
    if (tempFilters.find((f) => f.type === "storage")) {
      setFilters([
        ...tempFilters.filter((f) => f.type !== "storage"),
        newFilter,
      ]);
    } else {
      setFilters([...filters, newFilter]);
    }
  };

  return (
    <VStack width="full" gap={4}>
      <Accordion
        title="Ordenar"
        titleProps={{ padding: "0 1rem" }}
        height="15rem"
      >
        <form onSubmit={handleOrder(submitOrder)}>
          <VStack
            width="calc(100% - 2rem)"
            height="calc(100% - 2rem)"
            padding="1rem"
          >
            <FormControl width="full">
              <InputLabel htmlFor="orderBy" color="secondary" fontSize="sm">
                Condição:
              </InputLabel>
              <Select
                id="orderBy"
                width="full"
                {...registOrder("orderBy")}
                defaultValue={"createdAt"}
              >
                <option value={"createdAt"}>Data de criação</option>
                {orderByOptions?.map(({ name, key }) => (
                  <option key={key} value={key}>
                    {name}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>
                {errorsOrder?.orderBy?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl width="full">
              <Select
                id="order"
                width="full"
                {...registOrder("order")}
                defaultValue={"ASC"}
              >
                <option value={"ASC"}>Ascendente</option>
                <option value={"DESC"}>Descentente</option>
              </Select>
              <FormErrorMessage>{errorsOrder?.order?.message}</FormErrorMessage>
            </FormControl>
            <HStack width="full" justify="space-between">
              <Button
                variant="light"
                padding="0.5rem"
                onClick={() => resetOrder()}
                width="full"
              >
                Cancelar
              </Button>
              <Button type="submit" padding="0.5rem" width="full">
                Aplicar
              </Button>
            </HStack>
          </VStack>
        </form>
      </Accordion>
      <Accordion
        title="Fornecedores"
        titleProps={{ padding: "0 1rem" }}
        height="20rem"
      >
        <form onSubmit={handleProvider(submitProvider)}>
          <VStack
            width="calc(100% - 2rem)"
            height="calc(100% - 2rem)"
            padding="1rem"
          >
            <FormControl width="full" overflowY="auto" maxHeight="15rem">
              {providersReady &&
                providers?.providers?.map(({ id, name }) => (
                  <Checkbox
                    key={id}
                    value={id}
                    {...registProvider("providers", { valueAsNumber: true })}
                  >
                    {name}
                  </Checkbox>
                ))}
            </FormControl>
            <HStack width="full" justify="space-between">
              <Button
                variant="light"
                padding="0.5rem"
                onClick={() => resetProvider()}
                width="full"
              >
                Cancelar
              </Button>
              <Button type="submit" padding="0.5rem" width="full">
                Aplicar
              </Button>
            </HStack>
          </VStack>
        </form>
      </Accordion>
      <Accordion
        title="Gavetas"
        titleProps={{ padding: "0 1rem" }}
        height="20rem"
      >
        <form onSubmit={handleStorage(submitStorage)}>
          <VStack
            width="calc(100% - 2rem)"
            height="calc(100% - 2rem)"
            padding="1rem"
          >
            <FormControl width="full" overflowY="auto" maxHeight="15rem">
              {storagesReady &&
                storages?.storages?.map(({ id, name }) => (
                  <Checkbox
                    key={id}
                    value={id}
                    {...registStorage("storages", { valueAsNumber: true })}
                  >
                    {name}
                  </Checkbox>
                ))}
            </FormControl>
            <HStack width="full" justify="space-between">
              <Button
                variant="light"
                padding="0.5rem"
                onClick={() => resetStorage()}
                width="full"
              >
                Cancelar
              </Button>
              <Button type="submit" padding="0.5rem" width="full">
                Aplicar
              </Button>
            </HStack>
          </VStack>
        </form>
      </Accordion>
    </VStack>
  );
};

export default PartFilters;
