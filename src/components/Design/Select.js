import { forwardRef } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const baseStyle = ({ theme }) => `
  min-width: 300px;
  background: ${theme.colors.white};
  color: ${theme.colors.terciary};
  padding: 1rem; 
  border-radius: 8px;
  border: 1px solid #E0E0E0;
  option {
    color: red;
    background: red;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  };
  select {display: none;}
`;

const StyledSelect = styled.select`
  ${(p) => baseStyle(p)}
  ${(p) => sizes(p)};
  ${(p) => spacings(p)};
  ${(p) => tipography(p)};
  ${(p) => colors(p)};
`;

const Select = forwardRef(({ children, ...others }, ref) => (
  <StyledSelect ref={ref} {...others}>
    {children}
  </StyledSelect>
));

export default Select;
