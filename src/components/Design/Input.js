import { memo } from "react";
import { forwardRef } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const BaseStyle = ({ theme }) => `
  min-width: 300px;
  background: ${theme.colors.light};
  color: ${theme.colors.terciary};
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  &:hover {
    background: ${theme.colors.white};
  }
  &:focus {
    background: ${theme.colors.white};
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  &:active {
    background: ${theme.colors.white};
    -webkit-tap-highlight-color: transparent;
  }
`;

const StyledInput = styled.input`
  ${(p) => BaseStyle(p)};
  ${(p) => sizes(p)}
  ${(p) => spacings(p)}
  ${(p) => tipography(p)}
  ${(p) => colors(p)}
`;

const Input = forwardRef(({ children, ...others }, ref) => {
  return (
    <StyledInput ref={ref} {...others}>
      {children}
    </StyledInput>
  );
});

export default memo(Input);
