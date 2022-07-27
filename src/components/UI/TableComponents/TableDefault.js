import { memo } from "react";
import { useNavigate } from "react-router-dom";

const TableContent = ({ data, total, columns }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        gap: "0.5rem",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2% 10% 18% repeat(7, 10%)",
          width: "100%",
        }}
      >
        {columns.map((column, index) => (
          <div key={index}>{column.Header}</div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          gap: "1rem",
          width: "100%",
        }}
      >
        {data?.length > 0 &&
          data.map((row, dataIndex) => (
            <div
              key={dataIndex}
              onClick={() => navigate(`/parts/${row.id}`)}
              style={{
                display: "grid",
                gridTemplateColumns: "2% 10% 18% repeat(7, 10%)",
                alignItems: "center",
                width: "100%",
                height: "50px",
                background: "white",
                borderRadius: "12px",
                border: "1px solid #E0E0E0",
                fontSize: "16px",
                fontWeight: 400,
                cursor: "pointer",
              }}
            >
              {columns.map((column, index) => {
                const accessor = column?.accessor;
                const cell = row[accessor];
                const element = column.Cell?.(cell) ?? cell;

                if (accessor === "part_ref") {
                  return (
                    <div style={{ fontWeight: 300 }} key={index}>
                      {row.ref}
                    </div>
                  );
                }
                if (accessor === "part_name") {
                  return (
                    <div key={index} style={{ fontWeight: 500 }}>
                      {row.name}
                    </div>
                  );
                }

                if (accessor === "part_brand") {
                  return (
                    <div key={index} style={{ color: "#727272" }}>
                      {row.brand}
                    </div>
                  );
                }

                if (accessor === "part_provider") {
                  return (
                    <div key={index} style={{ color: "#727272" }}>
                      {row?.provider?.name}
                    </div>
                  );
                }

                if (accessor === "part_storage") {
                  return <div key={index}>{row?.storage?.name}</div>;
                }

                if (accessor === "stock_status") {
                  return (
                    <div key={index}>
                      <div
                        style={{
                          borderRadius: "50px",
                          background: `${
                            row.minStock > 0
                              ? row.stock > row.minStock
                                ? "green"
                                : row.stock === row.minStock
                                ? "gray"
                                : "red"
                              : row.stock > 0
                              ? "green"
                              : "red"
                          }`,
                          width: "15px",
                          height: "15px",
                          margin: "auto",
                        }}
                      />
                    </div>
                  );
                }

                return (
                  <div key={index}>
                    {element}
                    {element && column?.type === "price" && "€"}
                  </div>
                );
              })}
            </div>
          ))}
      </div>
    </div>
  );
};
export default memo(TableContent);
