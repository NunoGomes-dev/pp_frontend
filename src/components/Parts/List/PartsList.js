import { PageBody, TableContent } from "../../UI";

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
  const { data } = useParts;

  return (
    <PageBody width="full">
      <TableContent
        data={data?.parts || []}
        columns={columns}
        total={data?.total || null}
      />
    </PageBody>
  );
};

export default PartsList;
