import { memo } from "react";
import styled from "styled-components";
import { allSpacings } from "../../theme/spacing";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledVStack = styled.div`
  ${(p) => p};
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => p.justify || "start"};
  align-items: ${(p) => p.align || "start"};
  gap: ${(p) => allSpacings[p.gap] || p.gap || "0.5rem"};
  ${(p) => sizes(p)};
  ${(p) => spacings(p)};
  ${(p) => tipography(p)};
  ${(p) => colors(p)};
`;

const VStack = ({ children, ...others }) => {
  return <StyledVStack {...others}>{children}</StyledVStack>;
};

export default memo(VStack);
