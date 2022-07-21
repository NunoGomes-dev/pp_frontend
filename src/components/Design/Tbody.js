import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledTbody = styled.tbody`
  display: table;
  table-layout: fixed;
  background: transparent;
  width: 100%;
  border-spacing: 0 1rem;
  ${(props) => props};
  ${(props) => sizes(props)};
  ${(props) => spacings(props)};
  ${(props) => tipography(props)};
  ${(props) => colors(props)};
`;

const Tbody = (props) => {
  return <StyledTbody {...props} />;
};

export default Tbody;
