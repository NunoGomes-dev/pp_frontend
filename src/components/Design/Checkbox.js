import { forwardRef } from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input((props) => ``);

const Checkbox = forwardRef(({ children, ...others }, ref) => {
  return (
    <label style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
      <StyledCheckbox ref={ref} {...others} type="checkbox" />
      {children}
    </label>
  );
});
export default Checkbox;
