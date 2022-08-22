import { useQuery } from "react-query";
import api from "../../services/api";
import { queryBuilder } from "../../utils/queryBuilder";
import useToast from "../notifications/useToast";

export default function useOrders({
  currentPage,
  filters,
  include: includeState,
}) {
  const toast = useToast();
  const query = queryBuilder(filters) || "";
  const include = includeState ? `&include=${includeState}` : "";
  const page = currentPage ? `&page=${currentPage}` : "";
  const perpage = currentPage ? `limit=${process.env.REACT_APP_PER_PAGE}` : "";

  return useQuery(
    ["orders", page, `${query}${include}`],
    () =>
      api
        .get(`/orders?${perpage}${page}${query}${include}`)
        .then((res) => res.data),
    {
      onError: (error) => {
        console.log("error", error);
        toast({
          status: "error",
          title: "Ocorreu um erro!",
          description: "Erro ao obter encomendas!",
        });
      },
    }
  );
}
