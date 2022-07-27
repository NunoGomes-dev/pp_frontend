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
import SearchForm from "./SearchForm";

const PartFilters = ({
  filters,
  setFilters,
  orderByOptions,
  searchOptions,
  getProviders,
  getStorages,
  Operators,
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
  const searchForm = useForm();

  const submitOrder = ({ orderBy, order }) => {
    const newFilter = {
      name: `Ordenação: ${
        orderByOptions.find((o) => o.key === orderBy).name
      }, ${order === "ASC" ? "Ascendente" : "Descendente"}`,
      query: `order=${order}&orderBy=${orderBy}`,
      key: "order",
      clear: resetOrder,
    };
    let tempFilters = filters;
    if (tempFilters.find((f) => f.key === "order")) {
      setFilters([...tempFilters.filter((f) => f.key !== "order"), newFilter]);
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
      query: `providerId=[${values}]`,
      key: "provider",
      clear: resetProvider,
    };
    let tempFilters = filters;
    if (tempFilters.find((f) => f.key === "provider")) {
      setFilters([
        ...tempFilters.filter((f) => f.key !== "provider"),
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
      query: `storageId=[${values}]`,
      key: "storage",
      clear: resetStorage,
    };
    let tempFilters = filters;
    if (tempFilters.find((f) => f.key === "storage")) {
      setFilters([
        ...tempFilters.filter((f) => f.key !== "storage"),
        newFilter,
      ]);
    } else {
      setFilters([...filters, newFilter]);
    }
  };
  const submitSearch = ({ key, text, operator }) => {
    const OperatorObj = Operators.find((o) => o.operator === operator);
    const newFilter = {
      name: `${searchOptions.find((e) => e.key === key)?.name} ${
        OperatorObj.name
      }${text}`,
      query: `${key}${OperatorObj.query}=${text}`,
      key: `${key}${OperatorObj.query}=${text}`,
      clear: searchForm.reset,
    };
    setFilters([...filters, newFilter]);
    searchForm.reset();
  };
  return (
    <VStack width="full" gap={4}>
      <Accordion
        title="Ordenar"
        titleProps={{ padding: "0 1rem" }}
        height="30rem"
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
        height="30rem"
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
        height="30rem"
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
      <Accordion
        title="Pesquisar"
        titleProps={{ padding: "0 1rem" }}
        height="30rem"
      >
        <SearchForm
          searchForm={searchForm}
          submitSearch={submitSearch}
          searchOptions={searchOptions}
        />
      </Accordion>
    </VStack>
  );
};

export default PartFilters;
