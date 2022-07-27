import { memo } from "react";
import styled from "styled-components";
import { allSpacings } from "../../theme/spacing";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledGrid = styled.div`
  display: grid;
  ${(p) => p}
  gap: ${(p) => allSpacings[p.gap] || p.gap || "0.5rem"};
  ${(p) => sizes(p)}
  ${(p) => spacings(p)}
  ${(p) => tipography(p)}
  ${(p) => colors(p)}
`;

const Grid = ({ children, ...others }) => {
  return <StyledGrid {...others}>{children}</StyledGrid>;
};

export default memo(Grid);
