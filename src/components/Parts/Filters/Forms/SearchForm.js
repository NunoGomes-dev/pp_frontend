import { useEffect } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
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
    formState: { errors },
    reset: resetSearch,
  } = searchForm;

  const watchKey = watchSearch("key");
  const watchOperator = watchSearch("operator");

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
            {...registSearch("key", { required: "Campo obrigatório" })}
          >
            <option value="">Pesquisar por...</option>
            {options.map(({ key, name }) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors?.key?.message}</FormErrorMessage>
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
                  <HStack key={index}>
                    <input
                      type="radio"
                      id={e.operator}
                      value={e.operator}
                      className="hidden peer"
                      {...registSearch("operator", {
                        required: "Operador necessário",
                      })}
                    />
                    <label
                      htmlFor={e.operator}
                      className="py-2 px-4 bg-primaryLight text-primary rounded-lg cursor-pointer peer-checked:bg-primary peer-checked:text-white"
                    >
                      {e.name}
                    </label>
                  </HStack>
                ))}
          </Stack>
          <FormErrorMessage>{errors?.operator?.message}</FormErrorMessage>
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
            {...registSearch("text", { required: "Campo obrigatório" })}
          />
          <FormErrorMessage>{errors?.text?.message}</FormErrorMessage>
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
          <Button type="submit" className="w-full">
            Adicionar
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default SearchForm;
