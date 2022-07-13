import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const Button = styled.button`
  cursor: pointer;
  ${({ variant, theme }) => theme.components.button.variants[variant] || ``}
  ${(props) => props}
  ${sizes}
  ${spacings}
  ${tipography}
  ${colors}
`;

export default Button;
