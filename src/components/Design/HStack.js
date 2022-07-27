import { memo } from "react";
import styled from "styled-components";
import { allSpacings } from "../../theme/spacing";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledHStack = styled.div`
  ${(props) => props};
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "start"};
  gap: ${(p) => allSpacings[p.gap] || p.gap || "0.5rem"};
  ${(props) => sizes(props)}
  ${(props) => spacings(props)}
  ${(props) => tipography(props)}
  ${(props) => colors(props)}
`;

const HStack = ({ children, ...others }) => {
  return <StyledHStack {...others}>{children}</StyledHStack>;
};

export default memo(HStack);
