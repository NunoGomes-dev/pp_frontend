import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledTd = styled.td`
  border-width: 3px 0;
  border-color: black;
  border-style: solid;
  padding: 0.5rem 1rem;
  ${(props) => props};
  ${(props) => sizes(props)};
  ${(props) => spacings(props)};
  ${(props) => tipography(props)};
  ${(props) => colors(props)};
`;

const Td = (props) => {
  return <StyledTd {...props} />;
};

export default Td;
