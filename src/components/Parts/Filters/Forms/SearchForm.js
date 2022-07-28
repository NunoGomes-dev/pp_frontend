import { useEffect } from "react";
import {
  Button,
  FormControl,
  HStack,
  Input,
  InputLabel,
  Select,
  Stack,
  VStack,
} from "../../../Design";

const SearchForm = ({ searchForm, submitSearch, options }) => {
  const {
    handleSubmit: handleSearch,
    register: registSearch,
    watch: watchSearch,
    setValue: setSearch,
    getValues: getSearch,
    reset: resetSearch,
  } = searchForm;

  const watchKey = watchSearch("key");
  const watchOperator = watchSearch("operator");
  const watchText = watchSearch("text");
  useEffect(() => {
    if (!watchKey) return;
    setSearch("operator", null);
    setSearch("text", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchKey]);

  return (
    <form onSubmit={handleSearch(submitSearch)}>
      <VStack className="w-full h-full p-4">
        <FormControl className="w-full">
          <InputLabel htmlFor="key" className={"text-secondary text-sm"}>
            Pesquisar por:
          </InputLabel>
          <Select
            id="key"
            className="w-full"
            {...registSearch("key", { required: true })}
          >
            <option value="">Pesquisar por...</option>
            {options.map(({ key, name }) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl
          className={`overflow-hidden transition-all duration-300`}
          style={{
            paddingTop: watchKey ? "1rem" : "0px",
            maxHeight: watchKey ? "10rem" : "0px",
          }}
        >
          <InputLabel className={"text-secondary text-sm"}>
            Operador:
          </InputLabel>
          <Stack className="w-full flex-wrap">
            {watchKey &&
              options
                ?.find((s) => s?.key === watchKey)
                ?.options?.map((e, index) => (
                  <Button
                    className={"py-2 px-4"}
                    variant={watchOperator === e.operator ? "default" : "light"}
                    key={index}
                    onClick={() => {
                      if (getSearch("operator") === e.operator) {
                        return setSearch("operator", null);
                      }
                      setSearch("operator", e.operator);
                    }}
                  >
                    {e.name}
                  </Button>
                ))}
          </Stack>
        </FormControl>
        <FormControl
          className={`w-full overflow-hidden transition-all duration-300 mt-4 ${
            watchOperator ? "mb-2" : "mb-0"
          }`}
          style={{
            padding: watchKey && watchOperator ? "1rem 0 0 0" : 0,
            maxHeight: watchKey && watchOperator ? "5rem" : "0px",
          }}
        >
          <InputLabel htmlFor="text" className={"text-secondary text-sm"}>
            Pesquisar...
          </InputLabel>
          <Input
            id="text"
            className="w-full bg-white"
            {...registSearch("text", { required: true })}
          />
        </FormControl>
        <HStack
          className={`w-full justify-between gap-2 ${
            watchOperator ? "mt-2" : "mt-0"
          }`}
          justify="space-between"
        >
          <Button
            variant="light"
            onClick={() => resetSearch()}
            className="w-full"
          >
            Cancelar
          </Button>
          <Button type="submit" className="w-full" disabled={!watchText}>
            Adicionar
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default SearchForm;
