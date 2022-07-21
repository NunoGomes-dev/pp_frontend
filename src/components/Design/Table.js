import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledTable = styled.table`
  width: 80%;
  background: transparent;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0 0;
  ${(props) => props};
  ${(props) => sizes(props)};
  ${(props) => spacings(props)};
  ${(props) => tipography(props)};
  ${(props) => colors(props)};
`;

const Table = (props) => {
  return <StyledTable {...props} />;
};

export default Table;
