import { memo } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledTd = styled.td`
  font-weight: 400;
  font-size: 16px;
  padding: 0 1rem;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-width: 1px 0;
  border-color: #e0e0e0;
  border-style: solid;
  &:first-child {
    width: 5px;
    white-space: nowrap;
    border-left-width: 1px;
    border-radius: 0.375rem 0 0 0.375rem;
  }
  &:last-child {
    border-right-width: 1px;
    border-radius: 0 0.375rem 0.375rem 0;
  }
  ${(props) => props};
  ${(props) => sizes(props)};
  ${(props) => spacings(props)};
  ${(props) => tipography(props)};
  ${(props) => colors(props)};
`;

const Td = (props) => {
  return <StyledTd {...props} />;
};

export default memo(Td);
