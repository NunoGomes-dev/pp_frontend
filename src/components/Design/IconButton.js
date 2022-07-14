import styled from "styled-components";
import colors from "../../utils/colors";
import sizes from "../../utils/sizes";
import spacings from "../../utils/spacings";
import tipography from "../../utils/tipography";
import { Spinner } from "../UI";

const StyledButton = styled.button`
  cursor: pointer;
  ${({ variant, theme }) => theme.components.button.variants[variant] || ``};
  ${(props) => props};
  ${sizes};
  ${spacings};
  ${tipography};
  ${colors};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const IconButton = ({ isLoading, icon, disabled, ...rest }) => {
  return (
    <StyledButton {...rest} disabled={disabled || isLoading}>
      {isLoading ? <Spinner /> : icon}
    </StyledButton>
  );
};

export default IconButton;
