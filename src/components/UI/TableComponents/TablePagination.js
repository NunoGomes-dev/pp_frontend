import { memo } from "react";
import { useEffect } from "react";
import { Box, Button, HStack } from "../../Design";

const TablePagination = ({
  total,
  data,
  perpage,
  currentPage,
  setCurrentPage,
  type = "",
}) => {
  useEffect(() => {}, []);
  const pages = [];
  for (let i = 1; i < total % 10; i++) {
    pages.push(
      <Button
        key={i}
        variant={currentPage === i ? "light" : "outline"}
        fontSize="sm"
        padding="0 0"
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </Button>
    );
  }

  return (
    <HStack width="full" justify="space-between" align="center">
      <Box fontSize="sm" color="secondary">
        A mostrar {data?.length || perpage} de {total} {type}
      </Box>
      <HStack max-Width="50%" justify="end" align="center">
        {pages}
      </HStack>
    </HStack>
  );
};

export default memo(TablePagination);
