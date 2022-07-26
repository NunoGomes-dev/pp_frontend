import { memo } from "react";
import { Box, Button, HStack } from "../../Design";

const TablePagination = ({
  total,
  data,
  perpage,
  currentPage,
  setCurrentPage,
  type = "",
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(total / perpage); i++) {
    pages.push(
      <Button
        key={i}
        variant={currentPage === i ? "light" : "unstyled"}
        color={currentPage === i ? "primary" : "secondary"}
        fontSize="sm"
        padding="0"
        width="32px"
        height="32px"
        onClick={() => currentPage !== i && setCurrentPage(i)}
      >
        {i}
      </Button>
    );
  }

  return (
    <HStack width="full" justify="space-between" align="center">
      <Box fontSize="sm" color="secondary">
        A mostrar {data?.length} de {total} {type}
      </Box>
      <HStack max-Width="50%" justify="end" align="center">
        {pages}
      </HStack>
    </HStack>
  );
};

export default memo(TablePagination);
