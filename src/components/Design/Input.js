import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";

const Input = styled.input`
  ${({ theme }) => theme.components.input.baseStyle || ``};
  ${sizes};
  ${spacings};
  ${tipography};
  ${colors};
`;

export default Input;
