import { memo } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledTh = styled.th`
  background: rgba(221, 186, 146, 0.1);
  text-align: left;
  font-weight: 500;
  padding: 1rem;
  border-width: 1px 0;
  border-color: #e0e0e0;
  border-style: solid;
  &:first-child {
    width: 5px;
    white-space: nowrap;
    border-left-width: 1px;
  }
  &:last-child {
    border-right-width: 1px;
  }
  ${(props) => sizes(props)};
  ${(props) => spacings(props)};
  ${(props) => tipography(props)};
  ${(props) => colors(props)};
`;

const Th = (props) => {
  return <StyledTh fontSize="sm" color="terciary" {...props} />;
};

export default memo(Th);
