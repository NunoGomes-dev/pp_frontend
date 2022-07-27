import { useForm } from "react-hook-form";
import { Accordion, VStack } from "../../Design";
import MultiSelectForm from "./MultiSelectForm";
import OrderForm from "./OrderForm";
import SearchForm from "./SearchForm";

const PartFilters = ({
  filters,
  setFilters,
  options,
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
      name: `Ordenação: ${options.find((o) => o.key === orderBy).name}, ${
        order === "ASC" ? "Ascendente" : "Descendente"
      }`,
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
      name: `${options.find((e) => e.key === key)?.name} ${
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
        <OrderForm
          handleSubmit={handleOrder}
          register={registOrder}
          errors={errorsOrder}
          reset={resetOrder}
          submitForm={submitOrder}
          options={options}
        />
      </Accordion>
      <Accordion
        title="Fornecedores"
        titleProps={{ padding: "0 1rem" }}
        height="30rem"
      >
        <MultiSelectForm
          registKey="providers"
          handleSubmit={handleProvider}
          register={registProvider}
          reset={resetProvider}
          submitForm={submitProvider}
          data={providers?.providers || []}
          dataReady={providersReady}
        />
      </Accordion>
      <Accordion
        title="Gavetas"
        titleProps={{ padding: "0 1rem" }}
        height="30rem"
      >
        <MultiSelectForm
          registKey="storages"
          handleSubmit={handleStorage}
          register={registStorage}
          reset={resetStorage}
          submitForm={submitStorage}
          data={storages?.storages || []}
          dataReady={storagesReady}
        />
      </Accordion>
      <Accordion
        title="Pesquisar"
        titleProps={{ padding: "0 1rem" }}
        height="30rem"
      >
        <SearchForm
          searchForm={searchForm}
          submitSearch={submitSearch}
          options={options.filter((e) => !e.onlySortable)}
        />
      </Accordion>
    </VStack>
  );
};

export default PartFilters;
