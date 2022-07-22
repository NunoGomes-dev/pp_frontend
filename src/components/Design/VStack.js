import { memo } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledVStack = styled.div`
  ${(props) => props};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "start"};
  gap: ${(props) => props.theme.space[props.gap] || props.gap || "0.5rem"};
  ${(props) => sizes(props)};
  ${(props) => spacings(props)};
  ${(props) => tipography(props)};
  ${(props) => colors(props)};
`;

const VStack = ({ children, ...others }) => {
  return <StyledVStack {...others}>{children}</StyledVStack>;
};

export default memo(VStack);
