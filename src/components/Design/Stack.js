import { memo } from "react";
import styled from "styled-components";
import { allSpacings } from "../../theme/spacing";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledStack = styled.div`
  ${(p) => p};
  display: flex;
  flex-direction: ${(p) => p.direction || "row"};
  justify-content: ${(p) => p.justify || "start"};
  align-items: ${(p) => p.align || "start"};
  gap: ${(p) => allSpacings[p.gap] || p.gap || "0.5rem"};
  ${(p) => sizes(p)}
  ${(p) => spacings(p)}
  ${(p) => tipography(p)}
  ${(p) => colors(p)}
`;

const Stack = ({ children, ...others }) => {
  return <StyledStack {...others}>{children}</StyledStack>;
};

export default memo(Stack);
