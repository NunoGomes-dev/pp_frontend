import { useState } from "react";
import { VStack } from "../../Design";
import {
  PageBody,
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
import { Operators } from "../../../utils/Operators";

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
    name: "Marca",
    key: "brand",
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
  const getProviders = useProviders({
    currentPage: null,
    filters: null,
    include: "none",
  });

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

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <PageBody className="w-full">
      <VStack className="w-full gap-4">
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
        <TableContent
          columns={columns}
          data={data?.parts || []}
          isLoading={isLoading}
          pathTo="parts"
        />
        {isSuccess && (
          <TablePagination
            total={data?.total || 0}
            data={data?.parts}
            perpage={parseInt(process.env.REACT_APP_PER_PAGE) || 10}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            type="peças"
            isLoading={isLoading}
          />
        )}
      </VStack>
    </PageBody>
  );
};

export default PartsList;
