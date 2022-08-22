import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import useOrders from "../../../hooks/data/useOrders";
import api from "../../../services/api";
import { queryBuilder } from "../../../utils/queryBuilder";
import { VStack } from "../../Design";
import {
  PageBody,
  TableContent,
  TableFilters,
  TablePagination,
} from "../../UI";

const columns = [
  { Header: "Ref.", accessor: "order_ref" },
  { Header: "Tipo", accessor: "type" },
  { Header: "Observações", accessor: "order_observations" },
  { Header: "Peças", accessor: "count_parts" },
  { Header: "Cliente", accessor: "client.name" },
];

const ListOrders = () => {
  const queryClient = new useQueryClient();
  const [filters, setFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isSuccess } = useOrders({
    currentPage,
    filters,
    include: "all",
  });

  useEffect(() => {
    const refetchParts = async () => {
      const query = queryBuilder(filters);

      await queryClient.prefetchQuery(
        ["parts", `page=${currentPage + 1}`, query],
        () =>
          api
            .get(
              `/orders?limit=${process.env.REACT_APP_PER_PAGE}&page=${
                currentPage + 1
              }&${query}`
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

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <PageBody className="w-full">
      <VStack className="w-full gap-4">
        <TableFilters filters={filters} setFilters={setFilters}>
          {/* <PartFilters
            filters={filters}
            setFilters={setFilters}
            options={options}
            getProviders={getProviders || null}
            getStorages={getStorages || null}
            Operators={Operators}
          /> */}
        </TableFilters>
        <TableContent
          columns={columns}
          data={data?.orders || []}
          isLoading={isLoading}
          pathTo="orders"
        />
        {isSuccess && (
          <TablePagination
            total={data?.total || 0}
            data={data?.orders}
            perpage={parseInt(process.env.REACT_APP_PER_PAGE) || 10}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            type="encomendas"
            isLoading={isLoading}
          />
        )}
      </VStack>
    </PageBody>
  );
};

export default ListOrders;
