import { useForm } from "react-hook-form";
import { Accordion, VStack } from "../../Design";
import { OrderForm, SearchForm } from "./Forms";

const PartFilters = ({ filters, setFilters, options, Operators }) => {
  const {
    handleSubmit: handleOrder,
    register: registOrder,
    reset: resetOrder,
    formState: { errors: errorsOrder },
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
    <VStack className={"w-full gap-4"}>
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
