import { memo } from "react";

const InputLabel = ({ children, required, className, ...rest }) => {
  return (
    <label
      className={`text-md font-medium text-terciary ${className}`}
      {...rest}
    >
      {children}
      {required ? (
        <span style={{ fontWeight: 300, color: "red" }}> *</span>
      ) : (
        ""
      )}
    </label>
  );
};

export default memo(InputLabel);
