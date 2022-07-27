import { memo } from "react";
import { forwardRef } from "react";
import styled from "styled-components";
import { allColors } from "../../theme/colors";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const BaseStyle = () => `
  min-width: 300px;
  background: ${allColors.light};
  color: ${allColors.terciary};
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  &:hover {
    background: ${allColors.white};
  }
  &:focus {
    background: ${allColors.white};
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  &:active {
    background: ${allColors.white};
    -webkit-tap-highlight-color: transparent;
  }
`;

const StyledInput = styled.input`
  ${BaseStyle()};
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
