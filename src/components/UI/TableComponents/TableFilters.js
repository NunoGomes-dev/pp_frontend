import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Box, Button, HStack, VStack } from "../../Design";
import { Drawer } from "../Drawer";

const TableFilters = ({ children, filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <>
      <HStack width="full" justify="space-between" align="center">
        <HStack>
          {filters?.map((f, index) => (
            <HStack
              key={index}
              align="center"
              rounded="md"
              background="primary"
              color="white"
              fontSize="md"
              fontWeight="300"
              padding="0.25rem 1rem"
            >
              <span>{f.name}</span>
              <IoCloseOutline
                style={{
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  f.clear();
                  setFilters([...filters.filter((n) => n.key !== f.key)]);
                }}
              />
            </HStack>
          ))}
        </HStack>
        <Button
          icon={<FiFilter />}
          iconPlacement="end"
          padding={"0.5rem 1rem"}
          variant="outline2"
          alignSelf="end"
          onClick={() => setIsOpen(true)}
        >
          Filtros e Ordenação
        </Button>
      </HStack>
      <Drawer isOpen={isOpen} closeDrawer={() => setIsOpen(false)}>
        <VStack width="full" gap={6}>
          <HStack
            width="calc(100% - 2rem)"
            padding="0 1rem"
            justify="space-between"
            align="center"
          >
            <Box fontSize="xl" textTransform="uppercase">
              Filtros
            </Box>
            <Box onClick={() => setIsOpen(false)} cursor="pointer">
              <IoCloseOutline fontSize={"24px"} />
            </Box>
          </HStack>
          {children}
        </VStack>
      </Drawer>
    </>
  );
};

export default TableFilters;
