import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Table, Tbody, Td, Th, Thead, Tr } from "../../Design";
import { Skeleton } from "../Loadings";

const TableContent = ({ data, columns, isLoading, pathTo }) => {
  const navigate = useNavigate();
  const loadingSize = 50 * process.env.REACT_APP_PER_PAGE;

  return (
    <Table>
      <Thead className="sticky top-0">
        <Tr>
          {columns.map((column, index) => (
            <Th className={"whitespace-nowrap"} key={index}>
              {column.Header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {isLoading && (
          <Tr>
            <Td
              colSpan={columns.length || 0}
              className={`h-[${loadingSize}px] px-0 border-gray-400`}
            >
              <Skeleton className="w-full h-full rounded-none" />
            </Td>
          </Tr>
        )}
        {!isLoading &&
          data?.length > 0 &&
          data.map((row, dataIndex) => (
            <Tr
              key={dataIndex}
              onClick={() => navigate(`/${pathTo}/${row.id}`)}
              className="hover:bg-gray-50 hover:cursor-pointer"
            >
              {columns.map((column, index) => {
                const accessor = column?.accessor;
                const cell = row[accessor];
                const element = column.Cell?.(cell) ?? cell;
                if (accessor === "avatar") {
                  return (
                    <Td key={index}>
                      <Avatar name={row.name} image={row.image} />
                    </Td>
                  );
                }

                if (accessor === "part_ref") {
                  return (
                    <Td key={index} className="font-light">
                      {row.ref}
                    </Td>
                  );
                }
                if (accessor === "part_name") {
                  return (
                    <Td key={index} className="font-medium">
                      {row.name}
                    </Td>
                  );
                }

                if (accessor === "part_brand") {
                  return (
                    <Td key={index} className="text-secondary">
                      {row.brand}
                    </Td>
                  );
                }

                if (accessor === "part_provider") {
                  return (
                    <Td key={index} className="text-secondary">
                      {row?.provider?.name}
                    </Td>
                  );
                }

                if (accessor === "part_storage") {
                  return <Td key={index}>{row?.storage?.name}</Td>;
                }

                if (accessor === "stock_status") {
                  const color =
                    row.minStock > 0
                      ? row.stock > row.minStock
                        ? "bg-green-500"
                        : row.stock === row.minStock
                        ? "bg-orange-300"
                        : "bg-red-500"
                      : row.stock > 0
                      ? "bg-green-500"
                      : "bg-red-500";
                  return (
                    <Td key={index}>
                      <Box className={`rounded-full ${color} p-2 w-min`} />
                    </Td>
                  );
                }

                if (accessor.includes("count")) {
                  const key = accessor.split("_")[1];
                  return (
                    <Td key={index}>{key && row[key] ? row[key].length : 0}</Td>
                  );
                }

                return (
                  <Td key={index} className="h-[50px]">
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
export default memo(TableContent);
