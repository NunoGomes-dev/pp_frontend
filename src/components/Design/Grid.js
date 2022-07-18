import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledGrid = styled.div`
  display: grid;
  ${(props) => props}
  gap: ${(props) => props.theme.space[props.gap] || props.gap || "0.5rem"};
  ${(props) => sizes(props)}
  ${(props) => spacings(props)}
  ${(props) => tipography(props)}
  ${(props) => colors(props)}
`;

const Grid = ({ children, ...others }) => {
  return <StyledGrid {...others}>{children}</StyledGrid>;
};

export default Grid;
