import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import useProviders from "../../../hooks/data/useProviders";
import api from "../../../services/api";
import { Operators } from "../../../utils/Operators";
import { queryBuilder } from "../../../utils/queryBuilder";
import { VStack } from "../../Design";
import { ProviderFilters } from "../../Parts";
import {
  PageBody,
  TableContent,
  TableFilters,
  TablePagination,
} from "../../UI";

const columns = [
  { Header: "", accessor: "avatar" },
  { Header: "Nome", accessor: "name" },
  { Header: "Marca", accessor: "email" },
  { Header: "Contacto", accessor: "contact" },
  { Header: "NIF", accessor: "vat" },
  { Header: "Peças", accessor: "count_parts" },
];

const options = [
  { name: "Data de criação", key: "createdAt", onlySortable: true },
  {
    name: "Nome",
    key: "name",
    type: "text",
    options: Operators.filter((e) => e.type === "string"),
  },
  {
    name: "Email",
    key: "email",
    type: "text",
    options: Operators.filter((e) => e.type === "string"),
  },
  {
    name: "Contacto",
    key: "contact",
    type: "text",
    options: Operators.filter((e) => e.type === "string"),
  },
  {
    name: "NIF",
    key: "vat",
    type: "text",
    options: Operators.filter((e) => e.type === "string"),
  },
];

const ListProviders = () => {
  const queryClient = new useQueryClient();
  const [filters, setFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data, isSuccess } = useProviders({
    currentPage,
    filters,
  });

  useEffect(() => {
    const refetchProviders = async () => {
      const query = queryBuilder(filters);

      await queryClient.prefetchQuery(
        ["providers", `page=${currentPage + 1}`, query],
        () =>
          api
            .get(
              `/providers?limit=${process.env.REACT_APP_PER_PAGE}&page=${
                currentPage + 1
              }&${query}`
            )
            .then((res) => res.data),
        {
          staleTime: 5000,
        }
      );
    };

    if (data?.hasMore) refetchProviders();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <PageBody className="w-full">
      <VStack className="w-full gap-4">
        <TableFilters filters={filters} setFilters={setFilters}>
          <ProviderFilters
            filters={filters}
            setFilters={setFilters}
            options={options}
            Operators={Operators}
          />
        </TableFilters>
        <TableContent
          columns={columns}
          data={data?.providers || []}
          total={data?.total || 0}
          isLoading={isLoading}
          pathTo="providers"
        />
        {isSuccess && (
          <TablePagination
            total={data?.total || 0}
            data={data?.providers}
            perpage={parseInt(process.env.REACT_APP_PER_PAGE) || 10}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            type="fornecedores"
            isLoading={isLoading}
          />
        )}
      </VStack>
    </PageBody>
  );
};

export default ListProviders;
