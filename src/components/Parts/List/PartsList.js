import { useState } from "react";
import { VStack } from "../../Design";
import {
  PageBody,
  Skeleton,
  TableDefault,
  TableFilters,
  TablePagination,
} from "../../UI";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import useParts from "../../../hooks/data/useParts";
import api from "../../../services/api";
import PartsTableHeader from "./PartsTableHeader";
import PartFilters from "./PartFilters";
import useStorages from "../../../hooks/data/useStorages";
import useProviders from "../../../hooks/data/useProviders";
import { queryBuilder } from "../../../utils/queryBuilder";

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

const orderByOptions = [
  { name: "Data de criação", key: "createdAt" },
  { name: "Ref", key: "ref" },
  { name: "Nome", key: "name" },
  { name: "Stock", key: "stock" },
  { name: "Custo", key: "cost" },
  { name: "Revenda", key: "resale_price" },
  { name: "Preço", key: "price" },
];

const PartsList = () => {
  const queryClient = new useQueryClient();
  const [filters, setFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isSuccess } = useParts({
    currentPage,
    filters,
  });
  const getStorages = useStorages();
  const getProviders = useProviders();

  useEffect(() => {
    const refetchParts = async () => {
      const query = queryBuilder(filters);

      await queryClient.prefetchQuery(
        ["parts", `page=${currentPage + 1}`, query],
        () =>
          api
            .get(
              `/parts?limit=${process.env.REACT_APP_PER_PAGE}&page=${
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

  return (
    <PageBody width="full">
      <VStack width="full" align="start" justify="start" gap="1rem">
        <TableFilters filters={filters} setFilters={setFilters}>
          <PartFilters
            filters={filters}
            setFilters={setFilters}
            orderByOptions={orderByOptions}
            getProviders={getProviders || null}
            getStorages={getStorages || null}
          />
        </TableFilters>
        {isLoading ? (
          <VStack width="full" height="full" gap="1rem">
            <PartsTableHeader columns={columns} />
            <Skeleton width="full" height="50px" />
            <Skeleton width="full" height="50px" />
            <Skeleton width="full" height="50px" />
            <Skeleton width="full" height="50px" />
            <Skeleton width="full" height="50px" />
          </VStack>
        ) : (
          <TableDefault
            columns={columns}
            data={data?.parts || []}
            total={data?.total || 0}
          />
        )}
        {isSuccess && (
          <TablePagination
            total={data?.total || 0}
            data={data}
            perpage={parseInt(process.env.REACT_APP_PER_PAGE) || 10}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            type="peças"
          />
        )}
      </VStack>
    </PageBody>
  );
};

export default PartsList;
