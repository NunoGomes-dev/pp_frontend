import { memo } from "react";
import { forwardRef } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledInput = styled.input`
  ${({ theme }) => theme.components.input.baseStyle || ``};
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
