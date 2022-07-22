import { useState } from "react";
import { VStack } from "../../Design";
import { PageBody, Skeleton, TableContent, TablePagination } from "../../UI";

const columns = [
  { Header: "", accessor: "stock_status" },
  { Header: "Ref.", accessor: "part_ref" },
  { Header: "Nome", accessor: "part_name" },
  { Header: "Marca", accessor: "part_brand" },
  { Header: "Fornecedor", accessor: "part_provider" },
  { Header: "Stock", accessor: "stock" },
  { Header: "Custo", accessor: "cost", type: "price" },
  { Header: "Revenda", accessor: "resale_price", type: "price" },
  { Header: "Final", accessor: "price", type: "price" },
  { Header: "Gaveta", accessor: "part_storage" },
];

const PartsList = ({ useParts }) => {
  const { data, isLoading, isSuccess } = useParts;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PageBody width="full">
      {isLoading && (
        <VStack>
          <Skeleton width="full" height="30px" />
          <Skeleton width="full" height="30px" />
          <Skeleton width="full" height="30px" />
          <Skeleton width="full" height="30px" />
          <Skeleton width="full" height="30px" />
        </VStack>
      )}
      {!isLoading && isSuccess && (
        <VStack width="full" align="start" justify="start">
          <TableContent
            data={data?.parts || []}
            columns={columns}
            total={data?.total || 0}
          />
          <TablePagination
            total={data?.total || 0}
            data={data}
            perpage={process.env.REACT_APP_PER_PAGE || 10}
            currentPage={currentPage}
            type="peças"
          />
        </VStack>
      )}
    </PageBody>
  );
};

export default PartsList;
