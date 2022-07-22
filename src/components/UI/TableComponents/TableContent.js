import { useNavigate } from "react-router-dom";
import { Box, Table, Tbody, Td, Th, Thead, Tr } from "../../Design";

const TableContent = ({ data, total, columns }) => {
  const navigate = useNavigate();

  return (
    <Table>
      <Thead position="sticky" top="0">
        <Tr>
          {columns.map((column, index) => (
            <Th whiteSpace="nowrap" key={index}>
              {column.Header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data?.length > 0 &&
          data.map((row, dataIndex) => (
            <Tr key={dataIndex} onClick={() => navigate(`/parts/${row.id}`)}>
              {columns.map((column, index) => {
                const accessor = column?.accessor;
                const cell = row[accessor];
                const element = column.Cell?.(cell) ?? cell;

                if (accessor === "part_ref") {
                  return (
                    <Td key={index} fontWeight={300}>
                      {row.ref}
                    </Td>
                  );
                }
                if (accessor === "part_name") {
                  return (
                    <Td key={index} fontWeight={500}>
                      {row.name}
                    </Td>
                  );
                }

                if (accessor === "part_brand") {
                  return (
                    <Td key={index} color="secondary">
                      {row.brand}
                    </Td>
                  );
                }

                if (accessor === "part_provider") {
                  return (
                    <Td key={index} color="secondary">
                      {row?.provider?.name}
                    </Td>
                  );
                }

                if (accessor === "part_storage") {
                  return <Td key={index}>{row?.storage?.name}</Td>;
                }

                if (accessor === "stock_status") {
                  return (
                    <Td key={index}>
                      <Box
                        rounded="full"
                        bg={row.stock > 0 ? "green" : "red"}
                        padding="2"
                        width="min"
                      />
                    </Td>
                  );
                }

                return (
                  <Td key={index} height="50px">
                    {element}
                    {column?.type === "price" && "€"}
                  </Td>
                );
              })}
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};
export default TableContent;
