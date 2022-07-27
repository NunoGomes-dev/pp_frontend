import { useState } from "react";
import { VStack } from "../../Design";
import {
  PageBody,
  Skeleton,
  TableContent,
  TableFilters,
  TablePagination,
} from "../../UI";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import useParts from "../../../hooks/data/useParts";
import api from "../../../services/api";
import PartFilters from "../Filters/PartFilters";
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
  { Header: "Revenda", accessor: "resalePrice", type: "price" },
  { Header: "Final", accessor: "price", type: "price" },
  { Header: "Gaveta", accessor: "part_storage" },
];
const Operators = [
  { name: "Igual a ", operator: "=", query: "", type: "number" },
  { name: "Maior que ", operator: ">", query: "_gt", type: "number" },
  { name: "Menor que ", operator: "<", query: "_lt", type: "number" },
  { name: "Maior ou igual a ", operator: ">=", query: "_gte", type: "number" },
  { name: "Menor ou igual a ", operator: "<=", query: "_lte", type: "number" },
  { name: "Diferente de ", operator: "!==", query: "_ne", type: "number" },
  {
    name: "Começa em ",
    operator: "startsWith",
    query: "_startsWith",
    type: "string",
  },
  {
    name: "Acaba em ",
    operator: "endsWith",
    query: "_endsWith",
    type: "string",
  },
  {
    name: "Igual a ",
    operator: "equalTo",
    query: "_like",
    type: "string",
  },
  {
    name: "Diferente de ",
    operator: "notEqualTo",
    query: "_notLike",
    type: "string",
  },
  {
    name: "Contém ",
    operator: "contains",
    query: "_substring",
    type: "string",
  },
];
const options = [
  { name: "Data de criação", key: "createdAt", onlySortable: true },
  {
    name: "Ref",
    key: "ref",
    type: "text",
    options: Operators.filter((e) => e.type === "string"),
  },
  {
    name: "Nome",
    key: "name",
    type: "text",
    options: Operators.filter((e) => e.type === "string"),
  },
  {
    name: "Stock",
    key: "stock",
    options: Operators.filter((e) => e.type === "number"),
    type: "text",
  },
  {
    name: "Custo",
    key: "cost",
    options: Operators.filter((e) => e.type === "number"),
    type: "number",
  },
  {
    name: "Revenda",
    key: "resalePrice",
    options: Operators.filter((e) => e.type === "number"),
    type: "number",
  },
  {
    name: "Preço",
    key: "price",
    options: Operators.filter((e) => e.type === "number"),
    type: "number",
  },
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
            options={options}
            getProviders={getProviders || null}
            getStorages={getStorages || null}
            Operators={Operators}
          />
        </TableFilters>
        {isLoading ? (
          <VStack width="full" height="full" gap="0rem">
            {/* For table default */}
            {/* <PartsTableHeader columns={columns} />
            <Skeleton width="full" height="50px" />
            <Skeleton width="full" height="50px" />
            <Skeleton width="full" height="50px" />
            <Skeleton width="full" height="50px" />
            <Skeleton width="full" height="50px" /> */}
            {/* For Styled Components Table */}
            <Skeleton width="full" height="300px" />
          </VStack>
        ) : (
          <TableContent
            columns={columns}
            data={data?.parts || []}
            total={data?.total || 0}
          />
        )}
        {isSuccess && (
          <TablePagination
            total={data?.total || 0}
            data={data?.parts}
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
