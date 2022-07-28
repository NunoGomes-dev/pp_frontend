import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Box, Button, HStack, Stack, VStack } from "../../Design";
import { Drawer } from "../Drawer";

const TableFilters = ({ children, filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <>
      <HStack className="w-full justify-between">
        <Stack className="flex-wrap">
          {filters?.map((f, index) => (
            <HStack
              key={index}
              className="items-center rounded-md bg-primary text-white text-md font-light px-4 py-2 whitespace-nowrap"
            >
              <span>{f.name}</span>
              <div className="cursor-pointer">
                <IoCloseOutline
                  style={{
                    fontSize: "18px",
                  }}
                  onClick={() => {
                    f.clear();
                    setFilters([...filters.filter((n) => n.key !== f.key)]);
                  }}
                />
              </div>
            </HStack>
          ))}
        </Stack>
        <Button
          icon={<FiFilter />}
          iconPlacement="end"
          className="px-4 py-2 whitespace-nowrap"
          variant="outline2"
          onClick={() => setIsOpen(true)}
        >
          Filtros e Ordenação
        </Button>
      </HStack>
      <Drawer isOpen={isOpen} closeDrawer={() => setIsOpen(false)}>
        <VStack className="justify-between h-full">
          <VStack className="w-full gap-6">
            <HStack className="px-4 py-0 justify-between items-center h-min w-full">
              <Box className="text-xl uppercase">Filtros</Box>
              <Box onClick={() => setIsOpen(false)} cursor="pointer">
                <IoCloseOutline fontSize={"24px"} />
              </Box>
            </HStack>
            {children}
          </VStack>
          {filters.length > 0 && (
            <Box className="w-full px-4 py-0">
              <Button
                className="w-full text-sm p-2"
                onClick={() => setFilters([])}
              >
                Limpar Filtros
              </Button>
            </Box>
          )}
        </VStack>
      </Drawer>
    </>
  );
};

export default TableFilters;
