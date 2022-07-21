import { Box, Table, Tbody, Td, Th, Thead, Tr } from "../../Design";

const TableContent = ({ data, total, columns }) => {
  return (
    <Table>
      <Thead>
        <Tr unstyled>
          {columns.map((column, index) => (
            <Th whiteSpace="nowrap" bg="red" key={index}>
              {column.Header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data?.length > 0 &&
          data.map((row, dataIndex) => (
            <Tr key={dataIndex}>
              {columns.map((column, index) => {
                const accessor = column?.accessor;
                const cell = row[accessor];
                const element = column.Cell?.(cell) ?? cell;

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
                  <Td key={index}>
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
