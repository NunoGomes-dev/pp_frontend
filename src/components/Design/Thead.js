import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledThead = styled.thead`
  display: table;
  table-layout: fixed;
  background: transparent;
  width: 100%;
  ${(props) => props};
  ${(props) => sizes(props)};
  ${(props) => spacings(props)};
  ${(props) => tipography(props)};
  ${(props) => colors(props)};
`;

const Thead = (props) => {
  return <StyledThead {...props} />;
};

export default Thead;
