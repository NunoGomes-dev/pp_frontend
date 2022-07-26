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
} from "../../Design";

const SearchForm = ({ searchForm, submitSearch, searchOptions }) => {
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
      <VStack
        width="calc(100% - 2rem)"
        height="calc(100% - 2rem)"
        padding="1rem"
        gap="0rem"
      >
        <FormControl width="full">
          <InputLabel htmlFor="key" color="secondary" fontSize="sm">
            Pesquisar por:
          </InputLabel>
          <Select
            id="key"
            width="full"
            {...registSearch("key", { required: true })}
          >
            <option value="">Pesquisar por...</option>
            {searchOptions.map(({ key, name }) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl
          padding={watchKey ? "1rem 0 0 0" : 0}
          transition="max-height 0.3s"
          overflow="hidden"
          maxHeight={watchKey ? "10rem" : "0px"}
        >
          <InputLabel color="secondary" fontSize="sm">
            Operador:
          </InputLabel>
          <Stack flexWrap="wrap" width="full">
            {watchKey &&
              searchOptions
                ?.find((s) => s?.key === watchKey)
                ?.options?.map((e, index) => (
                  <Button
                    padding="0.5rem 1rem"
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
          width="full"
          padding={watchKey && watchOperator ? "1rem 0 0 0" : 0}
          transition="max-height 0.3s"
          overflow="hidden"
          maxHeight={watchKey && watchOperator ? "5rem" : "0px"}
        >
          <InputLabel htmlFor="text" color="secondary" fontSize="sm">
            Pesquisar...
          </InputLabel>
          <Input
            id="text"
            width="full"
            {...registSearch("text", { required: true })}
          />
        </FormControl>
        <HStack width="full" justify="space-between" padding={"1rem 0 0 0"}>
          <Button
            variant="light"
            padding="0.5rem"
            onClick={() => resetSearch()}
            width="full"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            padding="0.5rem"
            width="full"
            disabled={!watchText}
          >
            Adicionar
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default SearchForm;
