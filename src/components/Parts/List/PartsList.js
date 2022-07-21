import { PageBody, TableContent } from "../../UI";

const columns = [
  { Header: "", accessor: "stock_status" },
  { Header: "Ref.", accessor: "ref" },
  { Header: "Nome", accessor: "name" },
  { Header: "Marca", accessor: "brand" },
  { Header: "Fornecedor", accessor: "provider" },
  { Header: "Stock", accessor: "stock" },
  { Header: "Custo", accessor: "cost", type: "price" },
  { Header: "Revenda", accessor: "resale_price", type: "price" },
  { Header: "Final", accessor: "price", type: "price" },
  { Header: "Gaveta", accessor: "storage" },
];

const PartsList = ({ useParts }) => {
  const { data } = useParts;

  return (
    <PageBody>
      <TableContent
        data={data?.parts || []}
        columns={columns}
        total={data?.total || null}
      />
    </PageBody>
  );
};

export default PartsList;
