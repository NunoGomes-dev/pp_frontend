const PartsTableHeader = ({ columns }) => {
  return (
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
  );
};

export default PartsTableHeader;
