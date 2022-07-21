import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledTh = styled.th`
  text-align: left;
  font-weight: 500;
  padding: 0 1rem;
  ${(props) => sizes(props)};
  ${(props) => spacings(props)};
  ${(props) => tipography(props)};
  ${(props) => colors(props)};
`;

const Th = (props) => {
  return <StyledTh fontSize="sm" color="terciary" {...props} />;
};

export default Th;
