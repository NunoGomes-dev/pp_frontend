import { useState } from "react";
import { VStack } from "../../Design";
import {
  PageBody,
  Skeleton,
  TableContent,
  TableDefault,
  TablePagination,
} from "../../UI";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import useParts from "../../../hooks/data/useParts";
import api from "../../../services/api";

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

const PartsList = () => {
  const queryClient = new useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isSuccess } = useParts({ currentPage });

  useEffect(() => {
    const refetchParts = async () => {
      await queryClient.prefetchQuery(
        ["parts", currentPage + 1],
        () =>
          api
            .get(
              `/parts?limit=${process.env.REACT_APP_PER_PAGE}&page=${
                currentPage + 1
              }`
            )
            .then((res) => res.data),
        {
          staleTime: 5000,
        }
      );
    };

    if (data?.hasMore) refetchParts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, currentPage]);

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
      {isSuccess && (
        <VStack width="full" align="start" justify="start">
          <TableContent
            columns={columns}
            data={data?.parts || []}
            total={data?.total || 0}
          />
          <TablePagination
            total={data?.total || 0}
            data={data}
            perpage={process.env.REACT_APP_PER_PAGE || 10}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            type="peças"
          />
        </VStack>
      )}
    </PageBody>
  );
};

export default PartsList;
