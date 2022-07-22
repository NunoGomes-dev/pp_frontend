import { memo } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledTr = styled.tr`
  background: white;
  &:hover {
    background: rgba(114, 114, 114, 0.05);
    cursor: pointer;
  }
  ${(props) => props};
  ${(props) => sizes(props)};
  ${(props) => spacings(props)};
  ${(props) => tipography(props)};
  ${(props) => colors(props)};
`;

const Tr = ({ unstyled = false, ...others }) => {
  return <StyledTr {...others} />;
};

export default memo(Tr);
