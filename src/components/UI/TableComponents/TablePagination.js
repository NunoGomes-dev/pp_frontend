import { memo } from "react";
import { Box, Button, HStack } from "../../Design";
import { Skeleton } from "../Loadings";

const TablePagination = ({
  total,
  data,
  perpage,
  currentPage,
  setCurrentPage,
  isLoading,
  type = "",
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(total / perpage); i++) {
    const btnColor = currentPage === i ? "text-primary" : "text-secondary";
    const variant = currentPage === i ? "light" : "unstyled";
    pages.push(
      <Button
        key={i}
        variant={variant}
        className={`text-sm py-0 px-0 w-[32px] h-[32px] ${btnColor}`}
        textAlign="center"
        onClick={() => currentPage !== i && setCurrentPage(i)}
      >
        {i}
      </Button>
    );
  }

  return (
    <HStack className="w-full justify-between items-center">
      <Skeleton isLoading={isLoading} className="w-auto">
        <Box className="text-sm text-secondary">
          A mostrar {data?.length} de {total} {type}
        </Box>
      </Skeleton>
      <Skeleton isLoading={isLoading} className="w-auto">
        <HStack className={"max-w-[50%] justify-end items-center"}>
          {pages}
        </HStack>
      </Skeleton>
    </HStack>
  );
};

export default memo(TablePagination);
