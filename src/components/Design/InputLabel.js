import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.terciary};
  ${(props) => sizes(props)}
  ${(props) => spacings(props)}
  ${(props) => tipography(props)}
  ${(props) => colors(props)}
`;

const InputLabel = ({ children, ...others }) => {
  return <StyledLabel {...others}>{children}</StyledLabel>;
};

export default InputLabel;
