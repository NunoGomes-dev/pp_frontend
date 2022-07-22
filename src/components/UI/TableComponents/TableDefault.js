import { memo } from "react";
import { useNavigate } from "react-router-dom";

const TableContent = ({ data, total, columns }) => {
  const navigate = useNavigate();

  return (
    <table>
      <thead position="sticky" top="0">
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 &&
          data.map((row, dataIndex) => (
            <tr key={dataIndex} onClick={() => navigate(`/parts/${row.id}`)}>
              {columns.map((column, index) => {
                const accessor = column?.accessor;
                const cell = row[accessor];
                const element = column.Cell?.(cell) ?? cell;

                if (accessor === "part_ref") {
                  return <td key={index}>{row.ref}</td>;
                }
                if (accessor === "part_name") {
                  return <td key={index}>{row.name}</td>;
                }

                if (accessor === "part_brand") {
                  return (
                    <td key={index} color="secondary">
                      {row.brand}
                    </td>
                  );
                }

                if (accessor === "part_provider") {
                  return (
                    <td key={index} color="secondary">
                      {row?.provider?.name}
                    </td>
                  );
                }

                if (accessor === "part_storage") {
                  return <td key={index}>{row?.storage?.name}</td>;
                }

                if (accessor === "stock_status") {
                  return (
                    <td key={index}>
                      <div
                        style={{
                          borderRadius: "50px",
                          background: `${row.stock > 0 ? "green" : "red"}`,
                          padding: "0.5rem",
                          width: "min",
                        }}
                      />
                    </td>
                  );
                }

                return (
                  <td key={index} height="50px">
                    {element}
                    {column?.type === "price" && "€"}
                  </td>
                );
              })}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default memo(TableContent);
